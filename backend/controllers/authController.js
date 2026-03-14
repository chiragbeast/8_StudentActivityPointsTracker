const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: '30d',
    });
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password, role } = req.body;

    // Check for user email
    const user = await User.findOne({ email }).select('+password');

    if (user && (await bcrypt.compare(password, user.password))) {
        // Optional: verify role if requested
        if (role && user.role !== role) {
            res.status(401);
            throw new Error(`Account exists, but not as a ${role}`);
        }

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc    Register a new user (For testing/seeding purposes right now)
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role, department, rollNumber } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Create user (password hashed in pre-save hook in User model)
    const user = await User.create({
        name,
        email,
        password,
        role: role || 'Student',
        department,
        rollNumber
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Get logged-in user profile
// @route   GET /api/auth/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('name email role notificationsEnabled emailNotifications');

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        notificationsEnabled: user.notificationsEnabled,
        emailNotifications: user.emailNotifications,
    });
});

// @desc    Change logged-in user password
// @route   PUT /api/auth/change-password
// @access  Private
const changePassword = asyncHandler(async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
        res.status(400);
        throw new Error('Current password, new password and confirm password are required');
    }

    if (newPassword !== confirmPassword) {
        res.status(400);
        throw new Error('New password and confirm password do not match');
    }

    if (newPassword.length < 6) {
        res.status(400);
        throw new Error('Password must be at least 6 characters');
    }

    const user = await User.findById(req.user._id).select('+password');
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
        res.status(401);
        throw new Error('Current password is incorrect');
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
});

module.exports = {
    loginUser,
    registerUser,
    getMe,
    changePassword,
};

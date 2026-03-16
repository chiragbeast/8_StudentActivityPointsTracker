const asyncHandler = require('express-async-handler');
const ActivityPoints = require('../models/ActivityPoints');
const Submission = require('../models/Submission');
const Notification = require('../models/Notification');
const Deadline = require('../models/Deadline');
const User = require('../models/User');
const { sendEmail } = require('../utils/mailer');

// @desc    Get student dashboard data (points, recent submissions, deadlines)
// @route   GET /api/student/dashboard
// @access  Private/Student
const getDashboard = asyncHandler(async (req, res) => {
    const studentId = req.user._id;

    // Fetch activity points
    let points = await ActivityPoints.findOne({ student: studentId });
    if (!points) {
        // Create an empty points record if none exists yet
        points = await ActivityPoints.create({ student: studentId });
    }

    // Fetch 5 most recent submissions
    const recentSubmissions = await Submission.find({ student: studentId })
        .sort({ createdAt: -1 })
        .limit(5);

    // Fetch active deadlines relevant to the student
    const currentDate = new Date();
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(currentDate.getDate() + 3);
    const activeDeadlines = await Deadline.find({
        isActive: true,
        date: { $gte: currentDate },
        visibleToRoles: 'Student',
        $or: [
            { department: req.user.department },
            { department: null }
        ]
    }).sort({ date: 1 }).limit(5);

    for (const deadline of activeDeadlines) {
        if (deadline.date <= threeDaysFromNow) {
            const title = deadline.title || 'Upcoming Deadline';
            const lastAlert = await Notification.findOne({
                user: studentId,
                type: 'deadline_approaching',
                title: `Deadline Approaching: ${title}`,
                createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
            });

            if (!lastAlert) {
                await Notification.create({
                    user: studentId,
                    type: 'deadline_approaching',
                    title: `Deadline Approaching: ${title}`,
                    message: `The deadline for "${title}" is on ${deadline.date.toLocaleDateString()}. Please ensure your submissions are complete.`,
                    senderRole: 'System',
                });

                const user = await User.findById(studentId);
                if (user && user.emailNotifications) {
                    await sendEmail({
                        to: user.email,
                        subject: `Deadline Approaching: ${title}`,
                        text: `The deadline for "${title}" is on ${deadline.date.toLocaleDateString()}.`,
                    });
                }
            }
        }
    }

    res.status(200).json({
        points,
        recentSubmissions,
        activeDeadlines
    });
});

// @desc    Get student profile
// @route   GET /api/student/profile
// @access  Private/Student
const getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
        .populate('facultyAdvisor', 'name email department phone office');

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            rollNumber: user.rollNumber,
            department: user.department,
            profilePicture: user.profilePicture,
            phone: user.phone,
            facultyAdvisor: user.facultyAdvisor,
            notificationsEnabled: user.notificationsEnabled,
            emailNotifications: user.emailNotifications,
            batchNotifications: user.batchNotifications,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Update student profile preferences
// @route   PUT /api/student/profile
// @access  Private/Student
const updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        const { notificationsEnabled, emailNotifications, batchNotifications } = req.body;

        if (notificationsEnabled !== undefined) user.notificationsEnabled = notificationsEnabled;
        if (emailNotifications !== undefined) user.emailNotifications = emailNotifications;
        if (batchNotifications !== undefined) user.batchNotifications = batchNotifications;

        const updatedUser = await user.save();
        res.status(200).json({
            notificationsEnabled: updatedUser.notificationsEnabled,
            emailNotifications: updatedUser.emailNotifications,
            batchNotifications: updatedUser.batchNotifications,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

module.exports = {
    getDashboard,
    getProfile,
    updateProfile,
};

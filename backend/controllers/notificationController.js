const asyncHandler = require('express-async-handler');
const Notification = require('../models/Notification');
const SystemConfig = require('../models/SystemConfig');
const Deadline = require('../models/Deadline');

// Generate deadline reminders for students when deadlines are near.
const checkDeadlines = async (userId) => {
    try {
        const now = new Date();
        const threeDaysFromNow = new Date(now.getTime() + (3 * 24 * 60 * 60 * 1000));
        const deadlines = await Deadline.find({
            isActive: true,
            date: { $gte: now, $lte: threeDaysFromNow },
        });

        for (const deadline of deadlines) {
            const title = deadline.title || 'Upcoming Deadline';
            const exists = await Notification.findOne({
                user: userId,
                type: 'deadline_approaching',
                title: `Deadline Approaching: ${title}`,
            });

            if (!exists) {
                await Notification.create({
                    user: userId,
                    type: 'deadline_approaching',
                    title: `Deadline Approaching: ${title}`,
                    message: `The deadline for "${title}" is on ${deadline.date.toLocaleDateString()}.`,
                    sender: 'System Admin',
                    senderRole: 'System',
                });
            }
        }
    } catch (err) {
        console.error('Error checking deadlines:', err.message);
    }
};

// @desc    Get user notifications
// @route   GET /api/notifications
// @access  Private
const getNotifications = asyncHandler(async (req, res) => {
    if (req.user.role === 'Student') {
        await checkDeadlines(req.user._id);
    }

    const notifications = await Notification.find({ user: req.user._id })
        .sort({ createdAt: -1 });
    res.status(200).json(notifications);
});

// @desc    Mark notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
const markAsRead = asyncHandler(async (req, res) => {
    const notification = await Notification.findOneAndUpdate(
        { _id: req.params.id, user: req.user._id },
        { read: true },
        { new: true }
    );

    if (!notification) {
        res.status(404);
        throw new Error('Notification not found or unauthorized');
    }

    res.status(200).json(notification);
});

// @desc    Mark all notifications as read
// @route   PUT /api/notifications/mark-all-read
// @access  Private
const markAllAsRead = asyncHandler(async (req, res) => {
    await Notification.updateMany(
        { user: req.user._id, read: false },
        { read: true, readAt: Date.now() }
    );

    res.status(200).json({ success: true, message: 'All notifications marked as read' });
});

// @desc    Create notification
// @route   POST /api/notifications
// @access  Private
const createNotification = asyncHandler(async (req, res) => {
    const { userId, type, title, message, relatedSubmission } = req.body;

    if (!userId || !title || !message) {
        res.status(400);
        throw new Error('Please provide userId, title and message');
    }

    const notification = await Notification.create({
        user: userId,
        type: type || 'info',
        title,
        message,
        sender: req.user.name,
        senderRole: req.user.role,
        relatedSubmission,
    });

    res.status(201).json(notification);
});

// @desc    Get system guidelines and rules
// @route   GET /api/system/guidelines
// @access  Private
const getSystemGuidelines = asyncHandler(async (req, res) => {
    const config = await SystemConfig.findOne();
    if (!config) {
        res.status(404);
        throw new Error('System configuration not found');
    }

    res.status(200).json({
        guidelinesUrl: config.guidelinesUrl,
        pointsConfig: config.pointsConfig,
        currentAcademicYear: config.currentAcademicYear,
        currentSemester: config.currentSemester
    });
});

module.exports = {
    getNotifications,
    markAsRead,
    markAllAsRead,
    createNotification,
    getSystemGuidelines
};

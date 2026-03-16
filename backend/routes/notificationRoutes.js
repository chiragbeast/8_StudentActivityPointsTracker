const express = require('express');
const router = express.Router();
const {
    getNotifications,
    markAsRead,
    markAllAsRead,
    createNotification,
    getSystemGuidelines
} = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

// Notifications
router.route('/notifications')
    .get(getNotifications)
    .post(createNotification);

router.route('/notifications/mark-all-read')
    .put(markAllAsRead);

router.route('/notifications/:id/read')
    .put(markAsRead);

// System Config / Guidelines
router.route('/system/guidelines')
    .get(getSystemGuidelines);

module.exports = router;

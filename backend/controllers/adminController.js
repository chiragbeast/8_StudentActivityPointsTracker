const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const Submission = require('../models/Submission');

// @desc    Get admin dashboard stats and admin user list
// @route   GET /api/admin/dashboard
// @access  Private/Admin
const getDashboard = asyncHandler(async (req, res) => {
    const [totalStudents, totalFaculty, totalPendingSubmissions, adminUsers] = await Promise.all([
        User.countDocuments({ role: 'Student' }),
        User.countDocuments({ role: 'Faculty' }),
        Submission.countDocuments({ status: 'Pending' }),
        User.find({ role: 'Admin' })
            .select('name email role createdAt lastLogin isActive')
            .sort({ createdAt: -1 }),
    ]);

    res.status(200).json({
        stats: {
            totalStudents,
            totalFaculty,
            totalPendingSubmissions,
        },
        admins: adminUsers,
    });
});

module.exports = { getDashboard };

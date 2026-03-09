const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controllers/adminController');
const { protect, role } = require('../middleware/authMiddleware');

router.get('/dashboard', protect, role('Admin'), getDashboard);

module.exports = router;

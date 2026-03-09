const express = require('express');
const router = express.Router();
const { getDashboard, getStudents, createStudent, getStudentById, updateStudent, deleteStudent } = require('../controllers/adminController');
const { protect, role } = require('../middleware/authMiddleware');

router.get('/dashboard', protect, role('Admin'), getDashboard);
router.get('/students', protect, role('Admin'), getStudents);
router.post('/students', protect, role('Admin'), createStudent);
router.get('/students/:id', protect, role('Admin'), getStudentById);
router.put('/students/:id', protect, role('Admin'), updateStudent);
router.delete('/students/:id', protect, role('Admin'), deleteStudent);

module.exports = router;

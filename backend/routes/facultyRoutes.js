const express = require('express');
const router = express.Router();
const {
    getFacultyStats,
    getAssignedStudents,
    getPendingSubmissions,
    getSubmissionDetails,
    reviewSubmission,
    bulkReviewSubmissions,
    exportStudentsCSV,
    getFacultyProfile,
    getStudentSubmissions,
    exportStudentPDF,
    exportAllPDFs,
    notifyStudentOfEmail,
} = require('../controllers/facultyController');
const { protect, role } = require('../middleware/authMiddleware');

console.log('--- Faculty Routes Loading ---');

// All routes require Faculty role
router.use(protect, role('Faculty'));

router.get('/test-ping', (req, res) => res.json({ message: 'Faculty router is alive' }));
router.get('/', (req, res) => res.json({ message: 'Faculty root is alive' }));

router.get('/stats', getFacultyStats);
router.get('/students', getAssignedStudents);
router.get('/submissions/pending', getPendingSubmissions);
router.post('/submissions/bulk-review', bulkReviewSubmissions);
router.get('/submissions/:id', getSubmissionDetails);
router.post('/submissions/:id/review', reviewSubmission);
router.get('/students/export-all-pdf', exportAllPDFs);
router.get('/students/:studentId/submissions', getStudentSubmissions);
router.get('/students/:studentId/export-pdf', exportStudentPDF);
router.get('/export', exportStudentsCSV);
router.get('/profile', getFacultyProfile);
router.post('/students/:studentId/notify-email', notifyStudentOfEmail);

module.exports = router;

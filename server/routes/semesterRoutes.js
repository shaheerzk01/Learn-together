const express = require('express');
const { addSemester, getSemestersByProgram } = require('../controllers/semesterController');
const router = express.Router();

router.post('/', addSemester); // Add a semester
router.get('/:programId', getSemestersByProgram); // Get semesters by program

module.exports = router;

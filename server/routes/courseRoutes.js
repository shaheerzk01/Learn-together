const express = require('express');
const { addCourse, getCoursesBySemester } = require('../controllers/courseController');
const router = express.Router();

router.post('/', addCourse); // Add a course
router.get('/:semesterId', getCoursesBySemester); // Get courses by semester

module.exports = router;

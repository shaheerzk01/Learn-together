const express = require('express');
const { addProgram, getPrograms } = require('../controllers/programController');
const router = express.Router();

router.post('/', addProgram); // Add a program
router.get('/', getPrograms); // Get all programs

module.exports = router;

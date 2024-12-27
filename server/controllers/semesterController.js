const Semester = require('../models/Semester');

// Add a new semester
exports.addSemester = async (req, res) => {
  try {
    const { programId, semesterNumber } = req.body;
    const semester = new Semester({ programId, semesterNumber });
    await semester.save();
    res.status(201).json({ message: 'Semester created successfully', semester });
  } catch (error) {
    res.status(500).json({ message: 'Error creating semester', error });
  }
};

// Get semesters by program
exports.getSemestersByProgram = async (req, res) => {
  try {
    const { programId } = req.params;
    const semesters = await Semester.find({ programId });
    res.status(200).json(semesters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching semesters', error });
  }
};

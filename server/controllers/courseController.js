const Course = require('../models/Course');

// Add a new course
exports.addCourse = async (req, res) => {
  try {
    const { semesterId, courseName, description, creditHours } = req.body;
    const course = new Course({ semesterId, courseName, description, creditHours });
    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};

// Get courses by semester
exports.getCoursesBySemester = async (req, res) => {
  try {
    const { semesterId } = req.params;
    const courses = await Course.find({ semesterId });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

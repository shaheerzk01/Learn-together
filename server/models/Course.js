const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  courseName: { type: String, required: true },
  description: { type: String, required: true },
  creditHours: { type: Number, default: 3 },
});

module.exports = mongoose.model('Course', courseSchema);

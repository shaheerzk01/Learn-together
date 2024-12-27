const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  semesterNumber: { type: Number, required: true },
});

module.exports = mongoose.model('Semester', semesterSchema);

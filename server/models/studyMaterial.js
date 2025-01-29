const mongoose = require('mongoose');

const studyMaterialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  youtubeLink: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required:  true}, // To associate with a course
  votesUp: { type: Number, default: 0 },
  votesDown: { type: Number, default: 0 },
  status: { type: String, default: 'active' }, // active | removed
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StudyMaterial', studyMaterialSchema);

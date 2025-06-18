const mongoose = require('mongoose');

const studyMaterialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  youtubeLink: { type: String, default: null }, 
  pdfPath: { type: String, default: null },  
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
  votesUp: { type: Number, default: 0 },
  votesDown: { type: Number, default: 0 },
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StudyMaterial', studyMaterialSchema);

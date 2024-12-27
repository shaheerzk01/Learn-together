const express = require('express');
const {
  uploadMaterial,
  getMaterials,
  upvoteMaterial,
  downvoteMaterial,
} = require('../controllers/studyMaterialController');

const router = express.Router();

// Upload a new study material
router.post('/materials', uploadMaterial);

// Get all study materials
router.get('/get-materials', getMaterials);

// Upvote a material
router.patch('/materials/:id/upvote', upvoteMaterial);

// Downvote a material
router.patch('/materials/:id/downvote', downvoteMaterial);

module.exports = router;

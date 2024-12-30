const express = require('express');
const {
  uploadMaterial,
  getMaterials,
  upvoteMaterial,
  downvoteMaterial,
} = require('../controllers/studyMaterialController');

const router = express.Router();

router.post('/materials', uploadMaterial);

router.get('/get-materials', getMaterials);

router.patch('/materials/:id/upvote', upvoteMaterial);

router.patch('/materials/:id/downvote', downvoteMaterial);

module.exports = router;

const express = require('express');
const {
  uploadMaterial,
  getMaterials,
  upvoteMaterial,
  downvoteMaterial,
} = require('../controllers/studyMaterialController');
const upload = require('../middlewares/upload'); 


const router = express.Router();

router.post('/materials', upload.single('pdfFile'), uploadMaterial);

router.get('/get-materials/:courseId', getMaterials);

router.patch('/materials/:id/upvote', upvoteMaterial);

router.patch('/materials/:id/downvote', downvoteMaterial);

module.exports = router;

const StudyMaterial = require('../models/studyMaterial');

// Upload a new study material
exports.uploadMaterial = async (req, res) => {
  try {
    const { title, description, youtubeLink, courseId } = req.body;

    const newMaterial = new StudyMaterial({
      title,
      description,
      youtubeLink,
      courseId,
    });

    await newMaterial.save();
    res.status(201).json({ message: 'Study material uploaded successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading study material.', error });
  }
};

// Get all study materials
exports.getMaterials = async (req, res) => {
  try {
    const { courseId } = req.params;
    const materials = await StudyMaterial.find({ courseId });
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching study materials.', error });
  }
};


// Upvote a material
exports.upvoteMaterial = async (req, res) => {
  try {
    const { id } = req.params;

    const material = await StudyMaterial.findById(id);
    if (!material) return res.status(404).json({ message: 'Material not found.' });

    material.votesUp += 1;
    await material.save();

    res.status(200).json({ message: 'Upvoted successfully.', votesUp: material.votesUp });
  } catch (error) {
    res.status(500).json({ message: 'Error upvoting material.', error });
  }
};

// Downvote a material
exports.downvoteMaterial = async (req, res) => {
    try {
      const { id } = req.params;
  
      const material = await StudyMaterial.findById(id);
      if (!material) {
        return res.status(404).json({ message: 'Material not found.' });
      }
  
      material.votesDown += 1;
  
      if (material.votesDown >= 10) {
        await StudyMaterial.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Material deleted due to excessive downvotes.' });
      }
  
      await material.save();
  
      res.status(200).json({
        message: 'Downvoted successfully.',
        votesDown: material.votesDown,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error downvoting material.', error });
    }
  };
  

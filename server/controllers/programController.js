const Program = require('../models/Program');

// Add a new program
exports.addProgram = async (req, res) => {
  try {
    const { name, description } = req.body;
    const program = new Program({ name, description });
    await program.save();
    res.status(201).json({ message: 'Program created successfully', program });
  } catch (error) {
    res.status(500).json({ message: 'Error creating program', error });
  }
};

// Get all programs
exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching programs', error });
  }
};

const Feedback = require("../models/Feedback");

const submitFeedback = async (req, res) => {
  try {
    const { name, email, feedback } = req.body;

    // Validate input
    if (!name || !email || !feedback) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create and save feedback
    const newFeedback = new Feedback({ name, email, feedback });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Export the controller
module.exports = {
  submitFeedback,
};

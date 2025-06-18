const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');
const studyMaterialRoutes = require('./routes/studyMaterialRoutes');
const programRoutes = require('./routes/programRoutes');
const semesterRoutes = require('./routes/semesterRoutes');
const courseRoutes = require('./routes/courseRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', studyMaterialRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/semesters', semesterRoutes);
app.use('/api/courses', courseRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = 8989;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

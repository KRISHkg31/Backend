const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/video', videoRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

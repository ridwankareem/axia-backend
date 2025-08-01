
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const kycRoutes = require('./routes/kyc.routes');
const uploadRoutes = require('./routes/upload.routes'); 


// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/kyc', kycRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Axia Backend API is running.');
});


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ DB Error:', err));

module.exports = app;

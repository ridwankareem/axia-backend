const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  hobbies: [String],

   // One-to-one: reference to KYC model
  kyc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KYC'
  },

  // One-to-many: an array of posts
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
  
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

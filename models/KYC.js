const mongoose = require('mongoose');

const kycSchema = new mongoose.Schema({
  documentType: String,
  documentNumber: String,
  verified: { type: Boolean, default: false },

  // Belongs to one user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true  // One-to-one
  }
}, { timestamps: true });

module.exports = mongoose.model('KYC', kycSchema);

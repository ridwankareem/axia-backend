const KYC = require('../models/KYC');

exports.createKYC = async (req, res) => {
  try {
    const { documentType, documentNumber } = req.body;

    const kyc = await KYC.create({
      documentType,
      documentNumber,
      user: req.user.userId
    });

    res.status(201).json(kyc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getKYC = async (req, res) => {
  try {
    const kyc = await KYC.findOne({ user: req.user.userId });
    if (!kyc) return res.status(404).json({ message: 'KYC not found' });
    res.status(200).json(kyc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

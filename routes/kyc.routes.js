const express = require('express');
const router = express.Router();
const kycController = require('../controllers/kyc.controller');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, kycController.createKYC);
router.get('/', authenticate, kycController.getKYC);

module.exports = router;

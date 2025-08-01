const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

const {
  singleUpload,
  multiUploadSameField,
  multiUploadDifferentFields,
} = require('../controllers/upload.controller');

router.post('/single', upload.single('file'), singleUpload);

router.post('/multiple', upload.array('files', 5), multiUploadSameField);

router.post('/fields', upload.fields([
  { name: 'documents', maxCount: 3 },
  { name: 'images', maxCount: 3 }
]), multiUploadDifferentFields);

module.exports = router;

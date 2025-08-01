exports.singleUpload = (req, res) => {
  res.status(200).json({ file: req.file });
};

exports.multiUploadSameField = (req, res) => {
  res.status(200).json({ files: req.files });
};

exports.multiUploadDifferentFields = (req, res) => {
  res.status(200).json({
    documents: req.files.documents,
    images: req.files.images,
  });
};

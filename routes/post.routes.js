const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, postController.createPost);
router.get('/', authenticate, postController.getUserPosts);

module.exports = router;

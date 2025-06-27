const Post = require('../models/post');

exports.createPost = async (req, res) => {
  try {
    const { title, body, tags } = req.body;

    const post = await Post.create({
      title,
      body,
      tags,
      user: req.user.userId
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes (skip auth for exam)
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

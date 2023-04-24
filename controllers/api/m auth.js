// controllers/auth.js

const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

// Handle user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ where: { email } });

  // If user doesn't exist, return error
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check if password is correct
  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  // Set user ID in session
  req.session.userId = user.id;

  res.json({ message: 'Logged in successfully' });
});

// Handle user logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;

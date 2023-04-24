const express = require('express');
const router = express.Router();
const db = require('../models');

// GET user profile
router.get('/profile', async (req, res) => {
  try {
    const user = await db.user.findByPk(req.session.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST register new user
router.post('/register', async (req, res) => {
  try {
    const user = await db.user.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.user = {
      id: user.id,
      username: user.username,
    };

    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST login user
router.post('/login', async (req, res) => {
  try {
    const user = await db.user.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await user.validatePassword(req.body.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    req.session.user = {
      id: user.id,
      username: user.username,
    };

    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST logout user
router.post('/logout', async (req, res) => {
  try {
    req.session.destroy();
    return res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

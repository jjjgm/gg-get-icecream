const express = require('express');
const router = express.Router();
const db = require('../../models');

const dogroutes = require('./dogs');
const authroutes = require('./auth');
const messages = require('./messages');
const users = require('./users');

router.use("/users", users);
router.use("/auth", authroutes);
router.use("/messages", messages);
router.use("/dogs", dogroutes);
// Middleware for parsing JSON data
/* router.use(express.json()); */
/* 
// API route for getting all users
router.get('/users', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// API route for getting a single user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// API route for creating a new user
router.post('/users', async (req, res) => {
  try {
    const user = await db.User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// API route for updating an existing user
router.put('/users/:id', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update({
      username: req.body.username,
      password: req.body.password,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// API route for deleting an existing user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(204).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});
 */
module.exports = router;

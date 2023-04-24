const express = require('express');
const router = express.Router();
const db = require('../models');

// Route for displaying the registration form
router.get('/register', (req, res) => {
  res.render('auth/register');
});

// Route for registering a new user
router.post('/register', async (req, res) => {
  try {
    const newUser = await db.User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.user = newUser;
    res.redirect('/dogs');
  } catch (error) {
    console.log(error);
    res.redirect('/register');
  }
});

// Route for displaying the login form
router.get('/login', (req, res) => {
  res.render('auth/login');
});

// Route for logging in a user
router.post('/login', async (req, res) => {
  try {
    const user = await db.User.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.redirect('/login');
    }
    const passwordsMatch = await user.checkPassword(req.body.password);
    if (!passwordsMatch) {
      return res.redirect('/login');
    }
    req.session.user = user;
    res.redirect('/dogs');
  } catch (error) {
    console.log(error);
    res.redirect('/login');
  }
});

// Route for logging out a user
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;

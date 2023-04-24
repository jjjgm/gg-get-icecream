const express = require('express');
const router = express.Router();
const User = require('../../models/users');
const db = require('../../models');

// Index route for all users
router.get('/user', async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('users', { users });
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

// Route for displaying the form for creating a new user
router.get('/new', (req, res) => {
  res.render('new');
});

// Route for creating a new user
router.post('/users', async (req, res) => {
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.redirect('/users');
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

// Route for displaying the form for editing an existing user
router.get('users/:id/edit', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.render('edit', { user });
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

// Route for updating an existing user
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update({
      username: req.body.username,
      password: req.body.password,
    });
    res.redirect('/users');
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

// Route for deleting an existing user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.redirect('/users');
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../models');

// Index route for all users
router.get('/', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.render('users/index', { users });
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

// Route for displaying the form for creating a new user
router.get('/new', (req, res) => {
  res.render('users/new');
});

// Route for creating a new user
router.post('/', async (req, res) => {
  try {
    await db.User.create({
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
router.get('/:id/edit', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    res.render('users/edit', { user });
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

// Route for updating an existing user
router.put('/:id', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
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
router.delete('/:id', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    await user.destroy();
    res.redirect('/users');
  } catch (error) {
    console.log(error);
    res.render('error');
  }
});

module.exports = router;

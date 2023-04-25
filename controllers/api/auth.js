const express = require('express');
const router = express.Router();
const db = require('../../models');

// Route for displaying the registration form
router.get('/register', (req, res) => {
  res.render('auth/register');
});

// Route for registering a new user
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await db.User.create({
      username: req.body.username,
      password: req.body.password,
    });
    const newPet = await db.Dog.create({
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      bio: req.body.bio,
      url: req.body.url,
      user_id: newUser.id
    })
    req.session.save(()=>{
      req.session.user = newUser;
      req.session.logged_in = true;
      res.json(newUser);
    })
  } catch (error) {
    console.log(error);
    res.render('auth/register', { error });
  }
});

// Route for logging in a user
router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    const user = await db.User.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.json({ error: 'Username or password is incorrect.' });
    }
    const passwordsMatch = await user.checkPassword(req.body.password);
    if (!passwordsMatch) {
      return res.json({ error: 'Username or password is incorrect.' });
    }
    req.session.save(()=>{
      req.session.user = user;
      req.session.logged_in = true;
      res.json(user);
    })
  } catch (error) {
    console.log(error);
    res.json({ error: 'An error occurred. Please try again later.' });
  }
});

// Route for logging out a user
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;

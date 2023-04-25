const router = require('express').Router();
const db = require('../models')
const withAuth = require('../utils/auth');

// Index route for all users
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await db.User.findByPk(req.session.user.id, {
      include: [{ model: db.Dog }]
    });
    const user = userData.get({plain:true})
    res.render('homepage', { user });
    // res.status(200).json({ user })
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

// Route for displaying all dogs
router.get('/dogs', async (req, res) => {
    try {
      const dogData = await db.Dog.findAll();
      const dogs = dogData.map(dog => dog.get({ plain: true }));
      res.render('index', { dogs });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });

  router.get('/dogs/:id', async (req, res) => {
    try {
      const dogData = await db.Dog.findByPk(req.params.id);
  
      const dog = dogData.get({ plain: true });
  
      res.render('friendprofile', { dog });
      //res.json({ dog})
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/new', (req, res) => {
    res.render('dogs/new');
  });
  

  router.get('/messages', async (req, res) => {
    try {
      const messageData = await db.Messages.findAll();
      const messages = messageData.map(message => message.get({ plain: true }));
      res.render('messages', { messages });
    } catch (error) {
      console.log(error);
      res.redirect('/messages');
    }
  });

  // Route for displaying the new message form
router.get('/new', (req, res) => {
  res.render('messages/new');
});

module.exports = router;
const router = require('express').Router();
const db = require('../models')
const withAuth = require('../utils/auth');

// Index route for all users
router.get('/', async (req, res) => {
  try {
    const userData = await db.User.findByPk(req.session.user.id);
    const user = userData.get({plain:true})
    res.render('homepage', { user });
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
      const dogs = await db.Dog.findAll();
      res.render('index', { dogs });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });
  

router.get('/new', (req, res) => {
    res.render('dogs/new');
  });
  
// Route for displaying a specific dog
  router.get('/:id', async (req, res) => {
    try {
      const dog = await db.Dog.findByPk(req.params.id, {
        include: db.User,
      });
      if (!dog) {
        res.json("no dog with that ID");
      }
      res.render('dogs/show', { dog });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });



module.exports = router;
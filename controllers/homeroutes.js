const router = require('express').Router();
const { Project, User } = require('../models');


router.get('/', async (req, res) => {
  //TODO: Add code to find all the projects and the associated users and render homepage
});

router.get('/project/:id', async (req, res) => {
 //TODO: Add code to find one of the projects and the associated user and render project
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  //TODO: Add code to find the loggedIn user and their associated projects and render profile
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

// const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../middlewares/withAuth');

// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.findAll({
//       include: {
//         model: User,
//         attributes: ['username'],
//       },
//     });
//     res.render('homepage', { projects });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// router.get('/project/:id', async (req, res) => {
//   try {
//     const project = await Project.findByPk(req.params.id, {
//       include: {
//         model: User,
//         attributes: ['username'],
//       },
//     });
//     res.render('project', { project });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const user = await User.findByPk(req.session.user_id, {
//       include: {
//         model: Project,
//         attributes: ['id', 'title'],
//       },
//     });
//     res.render('profile', { user });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;

const router = require('express').Router();
const { Profile, User, Pet, Friend } = require('../models');
// const withAuth = require('../middlewares/withAuth');

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Pet,
          attributes: ['name', 'breed'],
        },
        {
          model: Friend,
          attributes: ['display_name'],
        },
      ],
    });
    res.render('homepage', { profiles });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const project = await Profile.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Pet,
          attributes: ['name', 'type'],
        },
        {
          model: Friend,
          attributes: ['username'],
        },
      ],
    });
    res.render('project', { project });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/profile', async (req, res) => {
  // withAuth above?
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Project,
          attributes: ['id', 'title'],
        },
        {
          model: Pet,
          attributes: ['name', 'type'],
        },
        {
          model: Friend,
          attributes: ['username'],
        },
      ],
    });
    res.render('profile', { user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../models');


// GET all users
// router.get('/api/users', async (req, res) => {
router.get('/', async (req, res) => {
    try {
        // const petProfiles = await db.Pet.findAll({});

        // const pets = petProfiles.map((pet) => pet.get({ plain: true }));

        res.render('homepage', {
            pets,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);

    }
});


// // GET a single user by ID
// router.get('/users:id', async (req, res) => {
//     try {
//         const userData = await db.User.findByPk(req.params.id);
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// GET all pets
router.get('/pets', async (req, res) => {
    try {
        const pets = await db.Pet.findAll({});
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET all messages
router.get('/messages', async (req, res) => {
    try {
        const messages = await db.Message.findAll({});
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/messages');
      return;
    }
  
    res.render('login');
  });


module.exports = router;
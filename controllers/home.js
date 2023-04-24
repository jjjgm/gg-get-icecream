const express = require('express');
const router = express.Router();
const db = require('../models');


// GET all users
// router.get('/api/users', async (req, res) => {
router.get('/', async (req, res) => {
    try {
        const homepage = await db.User.findAll();
        res.render('users', { homepage });
    } catch (err) {
        console.log(err);
        res.redirect('/users');
        //     res.status(200).json(user);
        // } catch (err) {
        //     res.status(500).json(err);
        // }
    }
});
// const user = homepage.map((user) => user.get({ plain: true }));

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
router.get('/api/pets', async (req, res) => {
    try {
        const pets = await db.Pet.findAll({});
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET all messages
router.get('/api/messages', async (req, res) => {
    try {
        const messages = await db.Message.findAll({});
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
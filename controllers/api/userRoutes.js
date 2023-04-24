const express = require('express');
const router = express.Router();
const User = require('../../models/User.js');

// GET all users
router.get('/api/users', async (req, res) => {
    try {
        const users = await User.findAll({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single user by ID
router.get('/api/users/:id', async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new user
router.post('/api/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT update an existing user
router.put('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a User
router.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
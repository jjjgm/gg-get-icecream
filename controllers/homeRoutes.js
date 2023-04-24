const express = require('express');
const router = express.Router();
const db = require('../models');


// GET all users
router.get('/api/users', async (req, res) => {
    try {
        const userData = await db.User.findAll({});
        res.status(200).json(friends);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single user by ID
router.get('/api/users/:id', async (req, res) => {
    try {
        const userData = await db.User.findByPk(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all pets
router.get('/api/pets', async (req, res) => {
    try {
        const pets = await db.Pet.findAll({});
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single pet by ID
router.get('/api/pets/:id', async (req, res) => {
    try {
        const pets = await db.Pet.findByPk(req.params.id);
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all messages
router.get('/api/messages', async (req, res) => {
    try {
        const messages = await db.Message.findAll({});
        res.status(200).json(profiles);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single profile by ID
router.get('/api/messages/:id', async (req, res) => {
    try {
        const profile = await db.Message.findByPk(req.params.id);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
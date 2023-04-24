const express = require('express');
const router = express.Router();
const db = require('../../models');


// GET all friends
router.get('/api/friends', async (req, res) => {
    try {
        const friends = await db.Friend.findAll({});
        res.status(200).json(friends);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single friend by ID
router.get('/api/friends/:id', async (req, res) => {
    try {
        const friend = await db.Friend.findByPk(req.params.id);
        res.status(200).json(friend);
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

// GET all Profiles
router.get('/api/profiles', async (req, res) => {
    try {
        const profiles = await db.Profile.findAll({});
        res.status(200).json(profiles);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single profile by ID
router.get('/api/profiles/:id', async (req, res) => {
    try {
        const profile = await db.Profile.findByPk(req.params.id);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
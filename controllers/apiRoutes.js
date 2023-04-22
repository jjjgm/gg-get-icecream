const express = require('express');
const router = express.Router();
const db = require('../models');

// GET all users
router.get('/users', async (req, res) => {
    try {
      const users = await db.User.findAll({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// GET a single user by ID
router.get('/users/:id', async (req, res) => {
    try {
      const users = await db.User.findByPk(req.params.id);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// POST a new user
router.post('/users', async (req, res) => {
    try {
      const newUser = await db.User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// PUT update an existing user
router.put('/users/:id', async (req, res) => {
    try {
      const updatedUser = await db.User.update(req.body, {
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
router.delete('/users/:id', async (req, res) => {
    try {
      const deletedUser = await db.User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET all friends
router.get('/friends', async (req, res) => {
    try {
      const friends = await db.Friend.findAll({});
      res.status(200).json(friends);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// GET a single friend by ID
router.get('/friends/:id', async (req, res) => {
    try {
      const friend = await db.Friend.findByPk(req.params.id);
      res.status(200).json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// POST a new friend
router.post('/friends', async (req, res) => {
    try {
      const newFriend = await db.Friend.create(req.body);
      res.status(200).json(newFriend);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// PUT update an existing friend
router.put('/friends/:id', async (req, res) => {
    try {
      const updatedFriend = await db.Friend.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(updatedFriend);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  // DELETE a friend
router.delete('/friends/:id', async (req, res) => {
    try {
      const deletedFriend = await db.Friend.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(deletedFriend);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET all pets
router.get('/pets', async (req, res) => {
    try {
      const pets = await db.Pet.findAll({});
      res.status(200).json(pets);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// GET a single pet by ID
router.get('/pets/:id', async (req, res) => {
    try {
      const pets = await db.Pet.findByPk(req.params.id);
      res.status(200).json(pets);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// POST a new pet
router.post('/pets', async (req, res) => {
    try {
      const newPet = await db.Pet.create(req.body);
      res.status(200).json(newPet);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// PUT update an existing pet
router.put('/pets/:id', async (req, res) => {
    try {
      const updatedPet = await db.Pet.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(updatedPet);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// DELETE a Pet
router.delete('/pets/:id', async (req, res) => {
    try {
      const deletedPet = await db.Pet.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(deletedPet);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET all Profiles
router.get('/profiles', async (req, res) => {
    try {
      const profiles = await db.Profile.findAll({});
      res.status(200).json(profiles);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// GET a single profile by ID
router.get('/profiles/:id', async (req, res) => {
    try {
      const profiles = await db.Profile.findByPk(req.params.id);
      res.status(200).json(profiles);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// POST a new profile
router.post('/profiles', async (req, res) => {
    try {
      const newProfile = await db.Profile.create(req.body);
      res.status(200).json(newProfile);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// PUT update an existing profile
router.put('/profiles/:id', async (req, res) => {
    try {
      const updatedProfile = await db.Profile.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(updatedProfile);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// DELETE a Profile
router.delete('/profiles/:id', async (req, res) => {
    try {
      const deletedProfile = await db.Profile.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(deletedProfile);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;

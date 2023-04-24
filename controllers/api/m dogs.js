// controllers/dogs.js

const express = require('express');
const { Dog } = require('../models');

const router = express.Router();

// Create a new dog
router.post('/', async (req, res) => {
  const { name, breed, age, gender, bio } = req.body;

  try {
    // Create new dog in database
    const dog = await Dog.create({ name, breed, age, gender, bio });

    res.status(201).json(dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create dog' });
  }
});

// Get all dogs
router.get('/', async (req, res) => {
  try {
    // Retrieve all dogs from database
    const dogs = await Dog.findAll();

    res.json(dogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve dogs' });
  }
});

// Get dog by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find dog by ID in database
    const dog = await Dog.findByPk(id);

    // If dog doesn't exist, return error
    if (!dog) {
      return res.status(404).json({ error: 'Dog not found' });
    }

    res.json(dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve dog' });
  }
});

// Update dog by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, breed, age, gender, bio } = req.body;

  try {
    // Find dog by ID in database
    const dog = await Dog.findByPk(id);

    // If dog doesn't exist, return error
    if (!dog) {
      return res.status(404).json({ error: 'Dog not found' });
    }

    // Update dog in database
    await dog.update({ name, breed, age, gender, bio });

    res.json(dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update dog' });
  }
});

// Delete dog by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find dog by ID in database
    const dog = await Dog.findByPk(id);

    // If dog doesn't exist, return error
    if (!dog) {
      return res.status(404).json({ error: 'Dog not found' });
    }

    // Delete dog from database
    await dog.destroy();

    res.json({ message: 'Dog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete dog' });
  }
});

module.exports = router;

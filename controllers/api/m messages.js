const express = require('express');
const router = express.Router();
const db = require('../models');

// GET all messages for a specific dog
router.get('/dogs/:id/messages', async (req, res) => {
  try {
    const dog = await db.dog.findByPk(req.params.id);
    if (!dog) {
      return res.status(404).json({ message: 'Dog not found' });
    }

    const messages = await db.message.findAll({
      where: { dogId: dog.id },
      include: { model: db.user, as: 'user' },
    });
    return res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST a new message for a specific dog
router.post('/dogs/:id/messages', async (req, res) => {
  try {
    const dog = await db.dog.findByPk(req.params.id);
    if (!dog) {
      return res.status(404).json({ message: 'Dog not found' });
    }

    const message = await db.message.create({
      text: req.body.text,
      dogId: dog.id,
      userId: req.session.user.id,
    });

    return res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

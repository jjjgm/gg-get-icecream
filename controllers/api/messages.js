const express = require('express');
const router = express.Router();
const db = require('../models');

// Route for displaying all messages
router.get('/', async (req, res) => {
  try {
    const messages = await db.Message.findAll();
    res.render('messages/index', { messages });
  } catch (error) {
    console.log(error);
    res.redirect('/messages');
  }
});

// Route for displaying the new message form
router.get('/new', (req, res) => {
  res.render('messages/new');
});

// Route for creating a new message
router.post('/', async (req, res) => {
  try {
    const newMessage = await db.Message.create({
      text: req.body.text,
      dogId: req.body.dogId,
      userId: req.session.user.id
    });
    res.redirect(`/messages/${newMessage.id}`);
  } catch (error) {
    console.log(error);
    res.redirect('/messages');
  }
});

// Route for displaying a single message
router.get('/:id', async (req, res) => {
  try {
    const message = await db.Message.findByPk(req.params.id);
    res.render('messages/show', { message });
  } catch (error) {
    console.log(error);
    res.redirect('/messages');
  }
});

module.exports = router;

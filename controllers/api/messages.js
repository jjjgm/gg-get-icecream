const express = require('express');
const router = express.Router();
const db = require('../../models');
const Message = require('../../models/messages')

// Route for displaying all messages
router.get('api/messages', async (req, res) => {
  try {
    const messages = await db.Message.findAll();
    res.render('messages/index', { messages });
  } catch (error) {
    console.log(error);
    res.redirect('api/messages');
  }
});

// Route for displaying the new message form
router.get('/api/messages/new', (req, res) => {
  res.render('messages/new');
});

// Route for creating a new message
router.post('/api/messages', async (req, res) => {
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
router.get('/api/messages:id', async (req, res) => {
  try {
    const message = await db.Message.findByPk(req.params.id);
    res.render('/api/messages/show', { message });
  } catch (error) {
    console.log(error);
    res.redirect('/messages');
  }
});

module.exports = router;

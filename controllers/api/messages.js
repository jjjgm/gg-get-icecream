const express = require('express');
const router = express.Router();
const db = require('../../models');

// Route for displaying all messages
// Route for displaying all dogs
// router.get('/messages', async (req, res) => {
//   try {
//     const message = await db.Messages.findAll();
//     res.render('index', { message });
//   } catch (error) {
//     console.log(error);
//     res.redirect('/messages');
//   }
// });



// Route for creating a new message
router.post('/messages', async (req, res) => {
  try {
    const newMessages = await db.Messages.create({
      text: req.body.text,
      dogId: req.body.dogId,
      userId: req.session.user.id
    });
    res.redirect(`/messages/${newMessages.id}`);
  } catch (error) {
    console.log(error);
    res.redirect('/messages');
  }
});

// Route for displaying a single message
router.get('messages/:id', async (req, res) => {
  try {
    const message = await db.Messages.findByPk(req.params.id);
    res.render('messages/show', { message });
  } catch (error) {
    console.log(error);
    res.redirect('/messages');
  }
});

module.exports = router;

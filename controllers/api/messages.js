const express = require('express');
const router = express.Router();
const db = require('../../models');




// Route for creating a new message
router.post('/newmessage', async (req, res) => {
  try {
    const newMessage = await db.Messages.create({
      text: req.body.text,
      userId: req.session.user.id,
    });
    res.redirect(`/newmessage/${newMessage.id}`);
    } catch (error) {
    console.log(error);
    res.redirect('/newmessasge');
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

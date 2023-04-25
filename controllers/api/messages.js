const express = require('express');
const router = express.Router();
const db = require('../../models');


//POST MESSAGE
router.post('/messages', async (req, res) => {
  try {
    const newMessage = await db.Messages.create ({
      text: req.body.message
    });
    res.render('usermessage');
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});



// // Route for displaying a single message
// router.get('messages/:id', async (req, res) => {
//   try {
//     const message = await db.Messages.findByPk(req.params.id);
//     res.render('messages/show', { message });
//   } catch (error) {
//     console.log(error);
//     res.redirect('/messages');
//   }
// });

module.exports = router;

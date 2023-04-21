const router = require('express').Router();
const { Friend } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newFriend = await Friend.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFriend);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const friendData = await Friend.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!friendData) {
      res.status(404).json({ message: 'No friend profile found with this id!' });
      return;
    }

    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

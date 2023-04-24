const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');

// POST a new message
router.post('/api/message', async (req, res) => {
    try {
        const newMessage = await Message.create(req.body);
        res.status(200).json(newMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT update an existing message
router.put('/api/message/:id', async (req, res) => {
    try {
        const updatedMessage = await Message.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(updatedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a message
router.delete('/api/message/:id', async (req, res) => {
    try {
        const deletedMessage = await Message.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(deletedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
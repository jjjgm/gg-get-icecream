const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const petRoutes = require('./pet');
const messageRoutes = require('./message');
const homeRoutes = require('../home');

router.use('/', homeRoutes);
router.use('/message', messageRoutes);
router.use('/user', userRoutes);
router.use('/pets', petRoutes);

module.exports = router;
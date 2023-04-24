const express = require('express');
const router = express.Router();

// const apiRoutes = require('.');

// router.use('/api', apiRoutes);

const userRoutes = require('./users');
const dogRoutes = require('./dogs');
const messageRoutes = require('./messages');
// const homeRoutes = require('../home');

// router.use('/', homeRoutes);
router.use('/messages', messageRoutes);
router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);


module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../../models');

const dogroutes = require('./dogs');
const authroutes = require('./auth');
const messages = require('./messages');
const users = require('./users');

router.use("/users", users);
router.use("/auth", authroutes);
router.use("/messages", messages);
router.use("/dogs", dogroutes);

module.exports = router;

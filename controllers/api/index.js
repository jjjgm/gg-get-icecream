const router = require('express').Router();

const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const messageRoutes = require('./messageRoutes');


router.use('/message', messageRoutes)
router.use('/user', userRoutes)
router.use('/pets', petRoutes)

module.exports = router;
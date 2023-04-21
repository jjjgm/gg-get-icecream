const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const petRoutes = require('./petRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/pets', petRoutes);
router.use('/friends', friendRoutes);
router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;

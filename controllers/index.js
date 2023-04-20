const router = require('express').Router();
<<<<<<< HEAD
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
=======

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> main

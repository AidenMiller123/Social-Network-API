const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// creates thoughts route
router.use('/thoughts', thoughtRoutes);
// creates users route
router.use('/users', userRoutes);

module.exports = router;

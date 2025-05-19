const express = require('express');

const viRoutes = require('./v1');

const router = express.Router();

router.use('/v1', viRoutes);

module.exports = router;
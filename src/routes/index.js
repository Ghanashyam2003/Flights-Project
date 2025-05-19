const express = require('express');
const airplaneRoutes = require('./v1/airplane-route');


const router = express.Router();

router.use('/airplanes', airplaneRoutes);

module.exports = router;

const express = require('express');
const { createFlight, getFlights } = require('../controllers/flightController');

const router = express.Router();

router.post('/', createFlight);
router.get('/', getFlights);

module.exports = router;

const express = require('express');
const router = express.Router();
const { subscribe } = require('../controllers/notificationController');

router.post('/subscribe', subscribe);

module.exports = router;

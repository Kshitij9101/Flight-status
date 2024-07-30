const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  flightNumber: { type: String, required: true },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);

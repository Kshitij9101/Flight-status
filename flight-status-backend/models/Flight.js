const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  status: { type: String, required: true },
  gate: { type: String, required: true },
  departureTime: { type: Date, required: true },
});

module.exports = mongoose.model('Flight', flightSchema);

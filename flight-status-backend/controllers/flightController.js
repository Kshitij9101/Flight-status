const Flight = require('../models/Flight');
const produceMessage = require('../producers/flightStatusProducer');

const createFlight = async (req, res) => {
  const { flightNumber, status, gate } = req.body;

  if (!flightNumber || !status) {
    return res.status(400).json({ message: 'Flight number and status are required' });
  }

  try {
    const flight = await Flight.findOneAndUpdate(
      { flightNumber },
      { status, gate },
      { new: true, upsert: true }
    );

    
    const message = { flightNumber, status, gate };
    await produceMessage(message);

    res.status(200).json({ message: 'Flight status updated successfully', flight });
  } catch (error) {
    res.status(500).json({ message: 'Error updating flight status', error });
  }
};

const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flights', error });
  }
};

module.exports = { createFlight, getFlights };

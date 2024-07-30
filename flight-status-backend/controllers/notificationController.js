const Subscription = require('../models/Subscription');

const createSubscription = async (req, res) => {
  const { email, flightNumber } = req.body;

  if (!email || !flightNumber) {
    return res.status(400).json({ message: 'Email and flight number are required' });
  }

  try {
    const subscription = new Subscription({ email, flightNumber });
    await subscription.save();
    res.status(201).json({ message: 'Subscription created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription', error });
  }
};

module.exports = { createSubscription };


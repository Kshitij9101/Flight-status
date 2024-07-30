
const nodemailer = require('nodemailer');
const Subscription = require('../models/Subscription');
const transporter = require('./transporter');

const sendNotification = async (flightStatusUpdate) => {
  const { flightNumber, status, gate } = flightStatusUpdate;

  const subscriptions = await Subscription.find({ flightNumber });

  subscriptions.forEach(async (subscription) => {
    const mailOptions = {
      from: 'indigo@gmail.com', 
      to: subscription.email,
      subject: `Flight ${flightNumber} Status Update`,
      text: `The status of your flight ${flightNumber} has been updated to ${status}. Gate: ${gate || 'N/A'}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Notification sent to ${subscription.email}`);
    } catch (error) {
      console.error(`Error sending notification to ${subscription.email}`, error);
    }
  });
};

module.exports = sendNotification;

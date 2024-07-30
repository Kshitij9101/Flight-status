const { consumer } = require('..config/kafka');
const sendNotification = require('../notification/sendNotification');

const consumeMessages = async () => {
  await consumer.subscribe({ topic: 'flight-status-updates', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const flightStatusUpdate = JSON.parse(message.value.toString());
      await sendNotification(flightStatusUpdate);
    }
  });
};

module.exports = consumeMessages;


const { producer } = require('..config/kafka');

const produceMessage = async (message) => {
  await producer.connect();
  await producer.send({
    topic: 'flight-status-updates',
    messages: [
      { value: JSON.stringify(message) }
    ]
  });
  await producer.disconnect();
};

module.exports = produceMessage;


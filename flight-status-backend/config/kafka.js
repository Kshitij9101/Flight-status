const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'flight-status-system',
  brokers: ['process.env.KAFKA_BROKER'] 
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'notification-group' });

const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
  console.log('Kafka connected...');
};

module.exports = { producer, consumer, connectKafka };

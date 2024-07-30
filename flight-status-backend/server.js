const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const { connectKafka } = require('./config/kafka');
const flightRoutes = require('./routes/flightRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const dotenv = require('dotenv');
const consumeMessages = require('./consumers/notificationConsumer');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', flightRoutes);
app.use('/api', notificationRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  // Connect to Kafka
  await connectKafka();
  
  // Start Kafka consumer
  consumeMessages();
});

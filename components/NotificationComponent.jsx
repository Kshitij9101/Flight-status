import React, { useState } from 'react';
import axios from 'axios';

const NotificationComponent = () => {
  const [email, setEmail] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubscribe = async () => {
    try {
      await axios.post('/api/subscribe', { email, flightNumber });
      alert('Subscribed successfully!');
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Subscribe to Notifications</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        className="input"
      />
      <button onClick={handleSubscribe} className="button">
        Subscribe
      </button>
    </div>
  );
};

export default NotificationComponent;

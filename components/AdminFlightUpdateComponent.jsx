import React, { useState } from 'react';
import axios from 'axios';

const AdminFlightUpdateComponent = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [status, setStatus] = useState('');
  const [gate, setGate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/flights', { flightNumber, status, gate })
      .then(response => {
        setMessage('Flight status updated successfully!');
        setFlightNumber('');
        setStatus('');
        setGate('');
      })
      .catch(error => {
        setMessage('There was an error updating the flight status.');
        console.error('There was an error updating the flight!', error);
      });
  };

  return (
    <div>
      <h1>Admin Portal: Update Flight Status</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Flight Number:
          <input type="text" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} required />
        </label>
        <br />
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
        </label>
        <br />
        <label>
          Gate:
          <input type="text" value={gate} onChange={(e) => setGate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update Status</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminFlightUpdateComponent;

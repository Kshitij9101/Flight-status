import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightStatusComponent = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('/api/flights');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };
    fetchFlights();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Flight Status</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.flightNumber} className="flight-item">
            <div>
              <span className="flight-number">{flight.flightNumber}</span> - {flight.status}
            </div>
            <span className="flight-gate">Gate: {flight.gate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightStatusComponent;

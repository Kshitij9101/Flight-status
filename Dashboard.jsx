import React from 'react';
import FlightStatusComponent from './components/FlightStatusComponent';
import NotificationComponent from './components/NotificationComponent';

const Dashboard = () => {
  return (
    <div>
      <FlightStatusComponent />
      <NotificationComponent />
    </div>
  );
};

export default Dashboard;

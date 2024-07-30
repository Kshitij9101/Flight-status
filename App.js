import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FlightStatusComponent from './components/FlightStatusComponent';
import NotificationComponent from './components/NotificationComponent';
import AdminFlightUpdateComponent from './components/AdminFlightUpdateComponent';
import HomeComponent from './components/HomeComponent';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Flight Status System</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/flight-status" element={<FlightStatusComponent />} />
            <Route path="/subscribe" element={<NotificationComponent />} />
            <Route path="/admin-update" element={<AdminFlightUpdateComponent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

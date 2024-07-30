
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flight-status">Flight Status</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
        <li><Link to="/admin-update">Admin Update</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

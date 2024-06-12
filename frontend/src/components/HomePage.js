// HomePage.js
import React from 'react';
import '../styles/style.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="welcome-section">
        <h1>Welcome to Our Collaborative Project Manager</h1>
        <p>Manage projects, collaborate with teams, and stay organized with ease!</p>
      </div>
      <div className="example-event-card">
        <h2>Example Event</h2>
        <p>Date: June 30, 2024</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default HomePage;

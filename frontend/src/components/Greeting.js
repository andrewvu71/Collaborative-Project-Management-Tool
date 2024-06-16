// src/components/Greeting.js
import React from 'react';
import '../styles/greeting.css';

const Greeting = () => {
  // For demonstration, we'll use a static name. 
  // In a real application, this could be dynamic.
  const userName = "User";

  const getCurrentGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="greeting">
      <h2>{`${getCurrentGreeting()}!`}</h2>
      <p>Welcome to your collaborative project management tool.</p>
    </div>
  );
};

export default Greeting;

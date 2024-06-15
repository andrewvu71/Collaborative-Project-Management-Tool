// Card.js
import React from 'react';

function Card({ event }) {
  return (
    <div className="card">
      <h3>{event}</h3>
      {/* Additional card details can be added here */}
    </div>
  );
}

export default Card;

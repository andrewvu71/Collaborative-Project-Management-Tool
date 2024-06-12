// Board.js
import React, { useState } from 'react';
import Timeline from './Timeline';
import Card from './Card';

function Board() {
  const [cards, setCards] = useState([]);

  const addCard = (event) => {
    console.log('Adding event:', event); // Log the event being added
    const newCard = { id: Date.now(), event: event };
    setCards([...cards, newCard]);
    console.log('Updated cards:', cards); // Log the updated cards state
  };

  return (
    <div>
      <h2>Project Board</h2>
      <Timeline events={cards} addCard={addCard} /> {/* Pass addCard as a prop */}
      <div>
        {cards.map((card) => (
          <Card key={card.id} event={card.event} />
        ))}
      </div>
    </div>
  );
}

export default Board;

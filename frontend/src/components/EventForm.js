// src/components/EventForm.js
import React, { useState } from 'react';
import '../styles/eventform.css';

const EventForm = ({ onAddCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      const newCard = { id: Date.now().toString(), title, description };
      onAddCard(newCard);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Add New Event</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button className="button" type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;

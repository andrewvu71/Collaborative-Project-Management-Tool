import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/eventform.css';

const EventForm = ({ onAddCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { id: Date.now().toString(), title, description, date: date.toDateString() };
    onAddCard(newCard);
    setTitle('');
    setDescription('');
    setDate(new Date());
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
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="MMMM d, yyyy"
      />
      <button className="button" type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;

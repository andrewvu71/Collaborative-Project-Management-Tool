// EventForm.js
import React, { useState, useEffect } from 'react';
import M from 'materialize-css'; // Import Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS

function EventForm({ addEvent }) {
  const [formData, setFormData] = useState({
    date: '',
    description: ''
  });

  // Initialize Materialize Date Picker on component mount
  useEffect(() => {
    const datePicker = document.querySelector('.datepicker');
    M.Datepicker.init(datePicker, {
      onSelect: handleDateChange
    });
  }, []);

  const handleDateChange = (selectedDate) => {
    const formattedDate = new Date(selectedDate).toLocaleDateString(); // Format the date
    setFormData({ ...formData, date: formattedDate });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    setFormData({ date: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="text"
        className="datepicker"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="waves-effect waves-light btn">
        Add Event
      </button>
    </form>
  );
}

export default EventForm;

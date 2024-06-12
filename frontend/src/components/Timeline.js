// Timeline.js
import React from 'react';

function Timeline({ events, addCard }) {
  return (
    <div className="timeline">
      <h2 className="timeline-title">Timeline</h2>
      {events.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="timeline-event-date">{event.date}</div>
          <div className="timeline-event-description">{event.description}</div>
        </div>
      ))}
      <button className="add-event-button" onClick={() => addCard && addCard('New Event')}>
        Add New Event
      </button>
    </div>
  );
}

export default Timeline;

// Timeline.js
import React from 'react';

function Timeline({ events, addEvent }) {
  const handleDragStart = (e, eventId) => {
    e.dataTransfer.setData('eventId', eventId.toString());
  };

  return (
    <div className="timeline">
      <h2 className="timeline-title">Timeline</h2>
      {events.map((event) => (
        <div
          key={event.id}
          className="timeline-event"
          draggable
          onDragStart={(e) => handleDragStart(e, event.id)}
        >
          <div className="timeline-event-date">{event.date}</div>
          <div className="timeline-event-description">{event.description}</div>
        </div>
      ))}
      <button className="add-event-button" onClick={() => addEvent && addEvent('New Event')}>
        Add New Event
      </button>
    </div>
  );
}

export default Timeline;

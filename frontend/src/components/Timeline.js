import React from 'react';
import '../styles/timeline.css';

const Timeline = ({ events }) => {
  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <div className="timeline-content">
        {sortedEvents.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-event-date">{event.date}</div>
            <div className="timeline-event-title">{event.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

// Board.js
import React, { useState } from 'react';
import { SortableContext, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Timeline from './Timeline';
import '../styles/style.css'; // Ensure your CSS file is imported

function Board() {
  const [events, setEvents] = useState([]);
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addEvent = (event) => {
    const newEvent = { id: Date.now(), ...event };
    setEvents([...events, newEvent]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const updatedEvents = arrayMove(events, active.id, over.id);
      setEvents(updatedEvents);
    }
  };

  const DraggableEvent = ({ event }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: event.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      zIndex: active ? '1' : 'auto',
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {event.description}
      </div>
    );
  };

  return (
    <div className="board">
      <div className="timeline-container">
        <h2>Timeline</h2>
        <SortableContext items={events} strategy={verticalListSortingStrategy}>
          <div>
            {events.map((event) => (
              <DraggableEvent key={event.id} event={event} />
            ))}
          </div>
        </SortableContext>
        <Timeline events={events} addEvent={addEvent} />
      </div>

      <div className="kanban-container">
        <div className="kanban-column">
          <h2>To Do</h2>
          <SortableContext items={todos} strategy={verticalListSortingStrategy}>
            <div>
              {todos.map((event) => (
                <DraggableEvent key={event.id} event={event} />
              ))}
            </div>
          </SortableContext>
        </div>

        <div className="kanban-column">
          <h2>In Progress</h2>
          <SortableContext items={inProgress} strategy={verticalListSortingStrategy}>
            <div>
              {inProgress.map((event) => (
                <DraggableEvent key={event.id} event={event} />
              ))}
            </div>
          </SortableContext>
        </div>

        <div className="kanban-column">
          <h2>Completed</h2>
          <SortableContext items={completed} strategy={verticalListSortingStrategy}>
            <div>
              {completed.map((event) => (
                <DraggableEvent key={event.id} event={event} />
              ))}
            </div>
          </SortableContext>
        </div>
      </div>
    </div>
  );
}

const verticalListSortingStrategy = (layoutRects, sortableRect, dragRect) => {
  const { translateY } = dragRect.transform;

  let activeIndex = 0;
  let index = layoutRects.findIndex(({ id }) => id === dragRect.id);

  if (index !== -1) {
    activeIndex = index;
  }

  return layoutRects.map(({ height }, index) => ({
    offset: {
      x: 0,
      y: index * height + translateY,
    },
  }));
};

export default Board;

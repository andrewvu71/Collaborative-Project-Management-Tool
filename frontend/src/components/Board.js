import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';
import EventForm from './EventForm';
import '../styles/board.css';

const initialColumns = {
  todos: { id: 'todos', title: 'To Do', items: [] },
  inProgress: { id: 'inProgress', title: 'In Progress', items: [] },
  completed: { id: 'completed', title: 'Completed', items: [] },
};

const Board = ({ addEvent }) => {
  const [columns, setColumns] = useState(initialColumns);

  const addCard = (card) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      todos: {
        ...prevColumns.todos,
        items: [...prevColumns.todos.items, card],
      },
    }));
    addEvent(card);
  };

  const moveCard = (cardId, fromColumnId, toColumnId, hoverIndex) => {
    const fromItems = [...columns[fromColumnId].items];
    const toItems = fromColumnId === toColumnId ? fromItems : [...columns[toColumnId].items];
    const fromIndex = fromItems.findIndex(item => item.id === cardId);

    if (fromIndex === -1) {
      console.error(`Card with id ${cardId} not found in column ${fromColumnId}`);
      return;
    }

    const [movedCard] = fromItems.splice(fromIndex, 1);
    toItems.splice(hoverIndex, 0, movedCard);

    setColumns((prevColumns) => ({
      ...prevColumns,
      [fromColumnId]: { ...prevColumns[fromColumnId], items: fromItems },
      [toColumnId]: { ...prevColumns[toColumnId], items: toItems },
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">
        <div className="event-form-section">
          <EventForm onAddCard={addCard} />
        </div>
        <div className="columns">
          {Object.keys(columns).map((key) => (
            <Column
              key={key}
              column={columns[key]}
              moveCard={moveCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Board;

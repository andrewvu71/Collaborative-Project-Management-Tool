// src/components/Board.js
import React, { useState } from 'react';
import Column from './Column';
import EventForm from './EventForm';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import '../styles/board.css';

const initialColumns = {
  todos: { id: 'todos', title: 'To Do', items: [] },
  inProgress: { id: 'inProgress', title: 'In Progress', items: [] },
  completed: { id: 'completed', title: 'Completed', items: [] },
};

const Board = () => {
  const [columns, setColumns] = useState(initialColumns);

  const addCard = (card) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      todos: {
        ...prevColumns.todos,
        items: [...prevColumns.todos.items, card],
      },
    }));
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const activeColumnId = findColumnId(active.id);
    const overColumnId = findColumnId(over.id);

    if (activeColumnId === overColumnId) {
      // Reorder items within the same column
      setColumns((prevColumns) => ({
        ...prevColumns,
        [activeColumnId]: {
          ...prevColumns[activeColumnId],
          items: arrayMove(
            prevColumns[activeColumnId].items,
            findIndex(activeColumnId, active.id),
            findIndex(activeColumnId, over.id)
          ),
        },
      }));
    } else {
      // Move item to another column
      const activeIndex = findIndex(activeColumnId, active.id);
      const overIndex = findIndex(overColumnId, over.id);

      if (activeIndex !== -1 && overIndex !== -1) {
        setColumns((prevColumns) => {
          const activeItems = [...prevColumns[activeColumnId].items];
          const overItems = [...prevColumns[overColumnId].items];
          const [movedItem] = activeItems.splice(activeIndex, 1);

          overItems.splice(overIndex, 0, movedItem);

          return {
            ...prevColumns,
            [activeColumnId]: { ...prevColumns[activeColumnId], items: activeItems },
            [overColumnId]: { ...prevColumns[overColumnId], items: overItems },
          };
        });
      }
    }
  };

  const findColumnId = (itemId) => {
    return Object.keys(columns).find((key) =>
      columns[key].items.some((item) => item.id === itemId)
    );
  };

  const findIndex = (columnId, itemId) =>
    columns[columnId]?.items.findIndex((item) => item.id === itemId);

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
      <div className="board">
        <div className="event-form-section">
          <EventForm onAddCard={addCard} />
        </div>
        <div className="columns">
          {Object.keys(columns).map((key) => (
            <Column key={key} column={columns[key]} columnId={key} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Board;

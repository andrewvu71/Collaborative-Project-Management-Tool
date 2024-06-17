// src/components/Column.js
import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import '../styles/column.css';

const Column = ({ column, moveCard }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      if (!monitor.isOver({ shallow: true })) return;

      const dragIndex = item.index;
      const hoverIndex = column.items.findIndex(i => i.id === item.id);

      if (dragIndex !== hoverIndex) {
        moveCard(item.id, item.from, column.id, hoverIndex);
        item.index = hoverIndex;
      }
    },
    drop: (item) => {
      if (item.from !== column.id) {
        moveCard(item.id, item.from, column.id);
        item.from = column.id; // Update the column id after moving the card
      }
    },
  });

  return (
    <div ref={drop} className="column">
      <div className="column-title">{column.title}</div>
      <div className="column-content">
        {column.items.map((item, index) => (
          <Card key={item.id} id={item.id} card={item} index={index} moveCard={moveCard} columnId={column.id} />
        ))}
      </div>
    </div>
  );
};

export default Column;

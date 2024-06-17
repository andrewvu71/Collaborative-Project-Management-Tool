// src/components/Card.js
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import '../styles/card.css';

const Card = ({ id, card, index, moveCard, columnId }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(item.id, item.from, columnId, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id, index, from: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className="card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="card-title">{card.title}</div>
      <div className="card-description">{card.description}</div>
      <div className="card-date">{card.date}</div>
    </div>
  );
};

export default Card;

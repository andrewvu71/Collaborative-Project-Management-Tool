// src/components/SortableCard.js
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Card from './Card';
import '../styles/card.css';

const SortableCard = ({ id, card, index, moveCard }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(item.id, item.from, item.from, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id, index, from: card.column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const style = {
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={ref} className="card" style={style}>
      <Card card={card} />
    </div>
  );
};

export default SortableCard;

// src/components/Card.js
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import '../styles/card.css';

const Card = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // Add styles for a better draggable experience
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="card">
      <div className="card-title">{card.title}</div>
      <div className="card-description">{card.description}</div>
    </div>
  );
};

export default Card;

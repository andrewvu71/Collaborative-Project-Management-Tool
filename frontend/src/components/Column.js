// src/components/Column.js
import React from 'react';
import Card from './Card';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import '../styles/column.css';

const Column = ({ column, columnId }) => {
  const { setNodeRef } = useDroppable({ id: columnId });

  return (
    <div ref={setNodeRef} className="column">
      <div className="column-title">{column.title}</div>
      <div className="column-content">
        <SortableContext items={column.items} strategy={verticalListSortingStrategy}>
          {column.items.map((item) => (
            <Card key={item.id} card={item} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default Column;

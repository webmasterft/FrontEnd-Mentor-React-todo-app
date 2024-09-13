import React from 'react';
import IconCross from './icons/IconCross';
import IconCheck from './icons/IconCheck';

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article id={id}>
      <button
        onClick={() => updateTodo(id)}
        className={`rounded-full w-5 h-5  block shrink-0  flex-none flex items-center justify-center ${completed ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500' : 'border-2 border-gray3'} `}
      >
        {completed && <IconCheck />}
      </button>
      <p className={`grow text-purple ${completed && 'line-through'}`}>
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;

import React from 'react';
import IconCross from './icons/IconCross';
import IconCheck from './icons/IconCheck';

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  const theme = localStorage.getItem('theme');

  return (
    <article className="py-5 px-6 gap-[24px] flex border-b-gray3  border-b dark:border-b-purple3">
      <button
        onClick={() => updateTodo(id)}
        className={`rounded-full w-5 h-5  block shrink-0  flex-none flex items-center justify-center ${completed ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500' : 'border-2 border-gray3'} `}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow text-purple dark:text-purple4 text-lg ${completed && 'line-through'}`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross fill={theme === 'dark' ? '#C8CBE7' : '#494C6B'} />
      </button>
    </article>
  );
};

export default TodoItem;

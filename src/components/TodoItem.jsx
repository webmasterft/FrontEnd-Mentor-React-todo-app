import React from 'react';
import CrossIcon from './icons/CrossIcon';

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article id={id}>
      <button className="flex-none">
        <span className="rounded-full w-[24px] h-[24px] border-2 block shrink-0 border-gray"></span>
      </button>
      <p className={`grow text-purple ${completed && 'line-through'}`}>
        {title}
      </p>
      <button className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;

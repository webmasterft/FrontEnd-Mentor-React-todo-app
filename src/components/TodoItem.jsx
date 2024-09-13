import React from 'react';
import IconCross from './icons/IconCross';
import IconCheck from './icons/IconCheck';

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article id={id}>
      {/* <button className="inline-block rounded-full w-5 h-5 border-2 block shrink-0 border-gray3 flex-none bg-gradient-to-r from-cyan-500 to-fuchsia-500 flex items-center justify-center">
        <IconCheck />
      </button> */}
      <button
        className={`rounded-full w-5 h-5 border-2 block shrink-0 border-gray3 flex-none flex items-center justify-center ${completed && 'bg-gradient-to-r from-cyan-500 to-fuchsia-500'} `}
      >
        {completed && <IconCheck />}
      </button>
      <p className={`grow text-purple ${completed && 'line-through'}`}>
        {title}
      </p>
      <button className="flex-none">
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;

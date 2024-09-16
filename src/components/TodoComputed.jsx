import React from 'react';

const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex py-5 px-6 justify-between text-gray text-sm bg-white  rounded-bl-md rounded-br-md dark:text-purpleLight dark:bg-darkblue">
      <span>{computedItemsLeft} task left</span>
      <button onClick={clearCompleted}>Clear completed</button>
    </section>
  );
};

export default TodoComputed;

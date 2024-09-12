import React from 'react';

const TodoComputed = () => {
  return (
    <section className="flex py-5 px-6 justify-between text-gray text-sm bg-white  rounded-bl-md rounded-br-md">
      <span>5 task left</span>
      <button>Clear completed</button>
    </section>
  );
};

export default TodoComputed;

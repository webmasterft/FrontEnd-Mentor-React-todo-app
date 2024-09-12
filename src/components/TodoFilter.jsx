import React from 'react';

const TodoFilter = () => {
  return (
    <section className="mt-[16px] flex py-5 px-6 text-gray text-sm items-center justify-center gap-5 bg-white">
      <button className="font-bold">All</button>
      <button className="font-bold">Active</button>
      <button className="font-bold">Completed</button>
    </section>
  );
};

export default TodoFilter;

import React from 'react';

const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="mt-[16px] flex py-5 px-6  text-sm items-center justify-center gap-5 bg-white">
      <button
        className={`font-bold hover:text-blue ${filter === 'all' ? 'text-blue' : 'text-gray'}`}
        onClick={() => changeFilter('all')}
      >
        All
      </button>
      <button
        className={`font-bold hover:text-blue ${filter === 'active' ? 'text-blue' : 'text-gray'}`}
        onClick={() => changeFilter('active')}
      >
        Active
      </button>
      <button
        className={`font-bold hover:text-blue ${filter === 'completed' ? 'text-blue' : 'text-gray'}`}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </button>
    </section>
  );
};

export default TodoFilter;

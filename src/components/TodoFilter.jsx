import React from 'react';

const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="mt-[16px] flex py-5 px-6  text-sm items-center justify-center gap-5 bg-white dark:bg-darkblue">
      <button
        className={`font-bold hover:text-blue dark:hover:text-white ${filter === 'all' ? 'text-blue' : 'text-gray dark:text-purple2'}`}
        onClick={() => changeFilter('all')}
      >
        All
      </button>
      <button
        className={`font-bold hover:text-blue dark:hover:text-white  ${filter === 'active' ? 'text-blue' : 'text-gray dark:text-purple2'}`}
        onClick={() => changeFilter('active')}
      >
        Active
      </button>
      <button
        className={`font-bold hover:text-blue dark:hover:text-white ${filter === 'completed' ? 'text-blue' : 'text-gray dark:text-purple2'}`}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </button>
    </section>
  );
};

export default TodoFilter;

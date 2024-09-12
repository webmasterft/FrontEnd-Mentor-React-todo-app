import React from 'react';

const TodoCreate = () => {
  return (
    <form className="mt-[40px] mb-[24px] w-full bg-white rounded-md py-5 px-6 overflow-hidden flex items-center gap-[24px]">
      <span className="rounded-full w-[24px] h-[24px] border-2 block shrink-0 border-gray"></span>
      <input
        className="w-full text-gray outline-none"
        type="text"
        placeholder="Create new todo..."
      ></input>
    </form>
  );
};

export default TodoCreate;

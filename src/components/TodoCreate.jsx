import React, { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[40px] mb-[24px] w-full bg-white rounded-md py-5 px-6 overflow-hidden flex items-center gap-[24px]"
    >
      <span className="rounded-full w-[24px] h-[24px] border-2 block shrink-0 border-gray3"></span>
      <input
        className="w-full text-gray outline-none"
        type="text"
        placeholder="Create new todo..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;

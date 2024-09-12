import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className=" rounded-tl-md rounded-tr-md bg-white [&>article]:py-5 [&>article]:px-6 [&>article]:gap-[24px] [&>article]:flex [&>article]:border-b-gray3  [&>article]:border-b">
      <TodoItem />
    </div>
  );
};

export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div className=" rounded-tl-md rounded-tr-md bg-white dark:bg-darkblue">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

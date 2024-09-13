import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import { useState } from 'react';

const initialTodos = [
  {
    id: 1,
    title: 'Learn Next',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn Svelte',
    completed: true,
  },
  {
    id: 3,
    title: 'Learn Angular',
    completed: false,
  },
  {
    id: 4,
    title: 'Learn Vue',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const createTodo = title => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <div className="container mx-auto max-w-[540px]">
        <Header />
        <TodoCreate createTodo={createTodo} />
        <main>
          <TodoList todos={todos} />
          <TodoComputed />
          <TodoFilter />
        </main>
      </div>
    </>
  );
}

export default App;

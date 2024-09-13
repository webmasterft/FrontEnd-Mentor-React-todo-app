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
  const [filter, setFilter] = useState('all');
  const createTodo = title => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const updateTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter(todo => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  const changeFilter = filter => setFilter(filter);
  const filterTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos; // Default to returning all todos if filter is not recognized
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-[540px]">
        <Header />
        <TodoCreate createTodo={createTodo} />
        <main>
          <TodoList
            todos={filterTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
          <TodoComputed
            computedItemsLeft={computedItemsLeft}
            clearCompleted={clearCompleted}
          />
          <TodoFilter changeFilter={changeFilter} filter={filter} />
        </main>
      </div>
    </>
  );
}

export default App;

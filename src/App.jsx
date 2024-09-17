import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import { useState, useEffect } from 'react';

const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
        return todos;
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos(prevTasks => reorder(prevTasks, source.index, destination.index));
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
            handleDragEnd={handleDragEnd}
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

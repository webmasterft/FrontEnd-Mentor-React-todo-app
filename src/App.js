import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[540px]">
        <Header />
        <TodoCreate />
        <main>
          <TodoList />
          <TodoComputed />
          <TodoFilter />
        </main>
      </div>
    </>
  );
}

export default App;

import { useSelector } from 'react-redux';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useEffect } from 'react';

function App() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="App flex flex-grow items-start justify-center bg-gray-900 h-screen w-full pt-8">
      <div className="max-w-full p-4 bg-gray-800 rounded-lg shadow-lg w-1/2 text-gray-200">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todo's
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos &&
            todos.length > 0 &&
            todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        placeholder="Write TODO's..."
        onChange={(e) => setTodo(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 py-1.5 outline-none duration-150 bg-white/20"
      />
      <button
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

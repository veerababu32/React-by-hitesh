import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleTheInput = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleTheInput} className='flex'>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 py-1.5 outline-none duration-150 bg-white/20"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

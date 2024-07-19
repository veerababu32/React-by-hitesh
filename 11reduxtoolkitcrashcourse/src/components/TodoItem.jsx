import React, { useState } from 'react';
import { removeTodo, updateTodo, toggleTodo } from '../feature/todo/todoSlice';
import { useDispatch } from 'react-redux';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState('');
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(updateTodo({ id: todo.id, todoMsg: todoMsg }));
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/50 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        disabled={!isTodoEditable}
      />
      <button
        className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50y`}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '✏️' : '📁'}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

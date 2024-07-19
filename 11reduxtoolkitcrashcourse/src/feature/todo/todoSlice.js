import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: nanoid(),
      todoMsg: 'Hey this is todo created by using redux!',
      completed: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, todoMsg } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, todo: todoMsg } : todo
      );
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { setTodo, addTodo, removeTodo, updateTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

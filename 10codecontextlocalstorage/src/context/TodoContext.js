/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';

// sample data
// todos: [
//   {
//     id: 1,
//     todo: 'Hey this is todo!',
//     completed: 'false'
//   }
// ]

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};

import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (id, todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodos: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
  return useContext(TodoContext)
}
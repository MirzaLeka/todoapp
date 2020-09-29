import create from "zustand";
import { Todo } from "./types";

export const useTodos = create<any>((set) => ({
  todos: [{ todo: "Get Milk", done: true, key: 0 }],

  addTodo: (todo: string) =>
    set(({ todos }) => ({
      todos: [
        ...todos,
        { todo, key: Math.floor(Math.random() * 1000000), done: false },
      ],
    })),

  toggleTodo: (key: number) =>
    set(({ todos }) => {
      const newTodos = todos.map((todo: Todo) => {
        if (todo.key === key) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

      return { todos: newTodos };
    }),

  removeTodo: (key: number) =>
    set(({ todos }) => {
      const newTodos = todos.filter((todo: Todo) => todo.key !== key);
      return { todos: newTodos };
    }),
}));

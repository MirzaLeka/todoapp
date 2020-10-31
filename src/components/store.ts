import create from "zustand";
import * as service from '../service/firebase-service';

export const useTodos = create<any>((set) => ({

    todos: [],

    fetchTodos: () => service.getTodos(),

    addTodo: (todo: string) => service.postTodo(todo),

    toggleTodo: (key: string) => set(({ todos }) => service.updateTodo(todos, key)),

    removeTodo: (key: string) => service.deleteTodo(key),

    setTodos: (data: any) =>  set(({ todos }) => ({ todos: data }))

}));

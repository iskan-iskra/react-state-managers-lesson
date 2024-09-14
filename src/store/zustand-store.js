import { create } from "zustand";

export const appZustandStore = create((setState) => ({
  todoList: [],

  addTodo: (title) =>
    setState((state) => ({
      todoList: [
        ...state.todoList,
        {
          id: (state.todoList[state.todoList.length - 1]?.id || 0) + 1,
          title,
          status: false,
        },
      ],
    })),

  toggleTodoStatus: (id) =>
    setState((state) => ({
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      ),
    })),

  deleteTodo: (id) =>
    setState((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),

  clearTodoList: () =>
    setState(() => ({
      todoList: [],
    })),
}));

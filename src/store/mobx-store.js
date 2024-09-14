import { makeAutoObservable } from "mobx";

class AppMobxStore {
  todoList = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (title) => {
    this.todoList.push({
      id: (this.todoList[this.todoList.length - 1]?.id || 0) + 1,
      title,
      status: false,
    });
  };

  toggleTodoStatus = (id) => {
    const todo = this.todoList.find((todo) => todo.id === id);
    if (todo) {
      todo.status = !todo.status;
    }
  };

  deleteTodo = (id) => {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  };

  clearTodoList = () => {
    this.todoList = [];
  };
}

export const appMobxStore = new AppMobxStore();

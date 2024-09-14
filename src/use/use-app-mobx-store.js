import { appMobxStore } from "@/store";
import { toJS } from "mobx";

export function useAppMobxStore() {
  return [
    toJS(appMobxStore.todoList),
    appMobxStore.addTodo,
    appMobxStore.toggleTodoStatus,
    appMobxStore.deleteTodo,
    appMobxStore.clearTodoList,
  ];
}

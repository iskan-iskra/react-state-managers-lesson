import { appCustomStore } from "@/store";
import { useSyncExternalStore } from "react";

export function useAppCustomStore(selector = (state) => state) {
  const subscribe = (callback) => appCustomStore.subscribe(callback);

  const getSnapshot = () => selector(appCustomStore.getState());

  const { todoList } = useSyncExternalStore(subscribe, getSnapshot);

  const { addTodo, clearTodoList, deleteTodo, toggleTodoStatus } =
    appCustomStore.methods;

  return [todoList, addTodo, toggleTodoStatus, deleteTodo, clearTodoList];
}

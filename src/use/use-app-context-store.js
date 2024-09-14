import { TODO_ACTIONS } from "@/const";
import { TodoContext } from "@/context";
import { useCallback, useContext } from "react";

export function useAppContextStore() {
  const [todoList, todoDispatch] = useContext(TodoContext);

  const addNewTodo = useCallback(
    (newTitle) =>
      todoDispatch({ type: TODO_ACTIONS.ADD_TODO, payload: newTitle }),
    [todoDispatch]
  );

  const changeTodoStatus = useCallback(
    (id) =>
      todoDispatch({ type: TODO_ACTIONS.TOGGLE_TODO_STATUS, payload: id }),
    [todoDispatch]
  );

  const deleteTodo = useCallback(
    (id) => todoDispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: id }),
    [todoDispatch]
  );

  const clearTotoList = useCallback(
    () => todoDispatch({ type: TODO_ACTIONS.CLEAR }),
    [todoDispatch]
  );

  return [todoList, addNewTodo, changeTodoStatus, deleteTodo, clearTotoList];
}

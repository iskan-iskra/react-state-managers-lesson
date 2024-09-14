import { TODO_ACTIONS } from "@/const";
import { useDispatch, useSelector } from "react-redux";

export function useAppReduxStore() {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNewTodo = (title) => {
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: title });
  };

  const changeTodoStatus = (id) => {
    dispatch({ type: TODO_ACTIONS.TOGGLE_TODO_STATUS, payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: id });
  };

  const clearTotoList = () => {
    dispatch({ type: TODO_ACTIONS.CLEAR });
  };

  return [todoList, addNewTodo, changeTodoStatus, deleteTodo, clearTotoList];
}

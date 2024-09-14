import { useCallback, useState } from "react";

export function useAppTodoController() {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = useCallback((newTitle) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: (prev[prev.length - 1]?.id || 0) + 1,
        title: newTitle,
        status: false,
      },
    ]);
  }, []);

  const deleteTodo = useCallback((reqId) => {
    setTodoList((prev) => prev.filter(({ id }) => id !== reqId));
  }, []);

  const changeTodoStatus = useCallback((reqId) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === reqId
          ? {
              ...todo,
              status: !todo.status,
            }
          : todo
      )
    );
  }, []);

  const clearTotoList = useCallback(() => {
    setTodoList(() => []);
  }, []);

  return [todoList, addNewTodo, changeTodoStatus, deleteTodo, clearTotoList];
}

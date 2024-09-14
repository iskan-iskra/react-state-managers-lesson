import { useAppZustandStore } from "@/use";
import { AppTodo } from "@/components";

export const AppTodoWithZustand = () => {
  const [
    todoList,
    addNewTodoHandler,
    changeTodoStatusHandler,
    deleteTodoHandler,
    clearTodoListHandler,
  ] = useAppZustandStore();
  return (
    <AppTodo
      title="Zustand TODO"
      todoList={todoList}
      addNewTodoHandler={addNewTodoHandler}
      changeTodoHandler={changeTodoStatusHandler}
      deleteTodoHandler={deleteTodoHandler}
      clearTodoListHandler={clearTodoListHandler}
    />
  );
};

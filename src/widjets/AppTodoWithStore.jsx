import { useAppCustomStore } from "@/use";
import { AppTodo } from "@/components";

export const AppTodoWithStore = () => {
  const [
    todoList,
    addNewTodoHandler,
    changeTodoStatusHandler,
    deleteTodoHandler,
    clearTodoListHandler,
  ] = useAppCustomStore();
  return (
    <AppTodo
      title="Custom Store"
      todoList={todoList}
      addNewTodoHandler={addNewTodoHandler}
      changeTodoHandler={changeTodoStatusHandler}
      deleteTodoHandler={deleteTodoHandler}
      clearTodoListHandler={clearTodoListHandler}
    />
  );
};

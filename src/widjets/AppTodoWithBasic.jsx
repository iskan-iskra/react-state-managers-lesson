import { useAppTodoController } from "@/use";
import { AppTodo } from "@/components";

export const AppTodoWithBasic = () => {
  const [
    todoList,
    addNewTodoHandler,
    changeTodoStatusHandler,
    deleteTodoHandler,
    clearTodoListHandler,
  ] = useAppTodoController();
  return (
    <AppTodo
      title="Basic TODO"
      todoList={todoList}
      addNewTodoHandler={addNewTodoHandler}
      changeTodoHandler={changeTodoStatusHandler}
      deleteTodoHandler={deleteTodoHandler}
      clearTodoListHandler={clearTodoListHandler}
    />
  );
};

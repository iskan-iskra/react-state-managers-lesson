import { AppTodo } from "@/components";
import { useAppContextStore } from "@/use";

export const AppTodoWithContext = () => {
  const [
    todoList,
    addNewTodoHandler,
    changeTodoStatusHandler,
    deleteTodoHandler,
    clearTodoListHandler,
  ] = useAppContextStore();
  return (
    <AppTodo
      title="Context logic"
      todoList={todoList}
      addNewTodoHandler={addNewTodoHandler}
      changeTodoHandler={changeTodoStatusHandler}
      deleteTodoHandler={deleteTodoHandler}
      clearTodoListHandler={clearTodoListHandler}
    />
  );
};

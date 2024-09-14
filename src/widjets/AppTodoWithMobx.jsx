import { useAppMobxStore } from "@/use";
import { AppTodo } from "@/components";
import { observer } from "mobx-react-lite";

export const AppTodoWithMobx = observer(() => {
  const [
    todoList,
    addNewTodoHandler,
    changeTodoStatusHandler,
    deleteTodoHandler,
    clearTodoListHandler,
  ] = useAppMobxStore();
  return (
    <AppTodo
      title="Mobx TODO"
      todoList={todoList}
      addNewTodoHandler={addNewTodoHandler}
      changeTodoHandler={changeTodoStatusHandler}
      deleteTodoHandler={deleteTodoHandler}
      clearTodoListHandler={clearTodoListHandler}
    />
  );
});

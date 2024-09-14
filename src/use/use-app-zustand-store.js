import { appZustandStore } from "@/store";

export function useAppZustandStore() {
  const { todoList, addNewTodo, changeTodoStatus, deleteTodo, clearTotoList } =
    appZustandStore((state) => ({
      todoList: state.todoList,
      addNewTodo: state.addTodo,
      changeTodoStatus: state.toggleTodoStatus,
      deleteTodo: state.deleteTodo,
      clearTotoList: state.clearTodoList,
    }));

  return [todoList, addNewTodo, changeTodoStatus, deleteTodo, clearTotoList];
}

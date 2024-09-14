import { TodoContext } from "@/context";
import { todoReducer } from "@/reducers";
import { useReducer } from "react";

export const appTodoProvider = (WrappedComponent) => {
  return function WithAppTodoProvider() {
    const [todoList, dispatch] = useReducer(todoReducer, []);

    return (
      <TodoContext.Provider value={[todoList, dispatch]}>
        <WrappedComponent />
      </TodoContext.Provider>
    );
  };
};

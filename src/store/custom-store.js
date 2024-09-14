const createAppCustomStore = () => {
  let state = { todoList: [] };
  const listeners = new Set();

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    listeners.forEach((listener) => listener());
  };

  const methods = {
    addTodo: (title) => {
      setState({
        todoList: [
          ...state.todoList,
          {
            id: (state.todoList[state.todoList.length - 1]?.id || 0) + 1,
            title,
            status: false,
          },
        ],
      });
    },

    toggleTodoStatus: (reqId) => {
      setState({
        todoList: state.todoList.map((todo) =>
          todo.id === reqId ? { ...todo, status: !todo.status } : todo
        ),
      });
    },

    deleteTodo: (reqId) => {
      setState({
        todoList: state.todoList.filter(({ id }) => id !== reqId),
      });
    },

    clearTodoList: () => {
      setState({
        todoList: [],
      });
    },
  };

  return {
    getState,
    subscribe,
    methods,
  };
};

export const appCustomStore = createAppCustomStore();

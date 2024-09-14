import { TODO_ACTIONS } from "@/const";

export function todoReducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: (state[state.length - 1]?.id || 0) + 1,
          title: action.payload,
          status: false,
        },
      ];
    case TODO_ACTIONS.DELETE_TODO:
      return state.filter(({ id }) => id !== action.payload);
    case TODO_ACTIONS.TOGGLE_TODO_STATUS:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, status: !todo.status } : todo
      );
    case TODO_ACTIONS.CLEAR:
      return [];
    default:
      return state;
  }
}

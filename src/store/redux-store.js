import { createStore } from "redux";
import { todoReduxReducer } from "@/reducers";

export const appReduxStore = createStore(todoReduxReducer);

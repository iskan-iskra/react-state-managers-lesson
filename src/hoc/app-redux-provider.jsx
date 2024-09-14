import { appReduxStore } from "@/store";
import { Provider } from "react-redux";

export const appReduxProvider = (WrappedComponent) => {
  return function WithAppReduxProvider() {
    return (
      <Provider store={appReduxStore}>
        <WrappedComponent />
      </Provider>
    );
  };
};

import { APP_ROUTER_PATH } from "@/const";
import { AppLayout } from "@/layout";
import {
  AppErrorPage,
  AppMainPage,
  AppBasicPage,
  AppContextPage,
  AppCustomStorePage,
  AppReduxStorePage,
  AppZustandStorePage,
  AppMobxStorePage,
} from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to={APP_ROUTER_PATH.MAIN} replace /> },
      { path: APP_ROUTER_PATH.MAIN, element: <AppMainPage /> },
      {
        path: APP_ROUTER_PATH.ERROR,
        element: <AppErrorPage />,
      },

      { path: APP_ROUTER_PATH.BASIC, element: <AppBasicPage /> },
      { path: APP_ROUTER_PATH.CONTEXT, element: <AppContextPage /> },
      {
        path: APP_ROUTER_PATH.CUSTOM_STORE,
        element: <AppCustomStorePage />,
      },
      {
        path: APP_ROUTER_PATH.REDUX_STORE,
        element: <AppReduxStorePage />,
      },
      {
        path: APP_ROUTER_PATH.ZUSTAND_STORE,
        element: <AppZustandStorePage />,
      },
      {
        path: APP_ROUTER_PATH.MOBX_STORE,
        element: <AppMobxStorePage />,
      },
    ],
  },
  { path: "*", element: <Navigate to={APP_ROUTER_PATH.ERROR} replace /> },
]);

export default router;

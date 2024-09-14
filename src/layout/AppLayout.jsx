import { AppHeader } from "@/widjets";
import { Outlet } from "react-router-dom";
import "./app-layout.css";
import { appThemeProvider, appTodoProvider, appReduxProvider } from "@/hoc";

const AppLayoutCore = () => (
  <>
    <AppHeader />
    <main>
      <Outlet />
    </main>
  </>
);

const AppLayoutWithThemeProvider = appThemeProvider(AppLayoutCore);

const AppLayoutWithTodoProvider = appTodoProvider(AppLayoutWithThemeProvider);

const AppLayoutWithReduxProvider = appReduxProvider(AppLayoutWithTodoProvider);

export const AppLayout = AppLayoutWithReduxProvider;

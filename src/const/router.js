export const APP_ROUTER_PATH = {
  MAIN: "/main",
  ERROR: "/404",

  BASIC: "/basic",

  CONTEXT: "/context",

  CUSTOM_STORE: "/custom-store",

  REDUX_STORE: "/redux-store",

  ZUSTAND_STORE: "/zustand-store",

  MOBX_STORE: "/mobx-store",
};

// порядок важен
export const APP_NAVIGATION = [
  { path: APP_ROUTER_PATH.MAIN, title: "Main" },

  { path: APP_ROUTER_PATH.BASIC, title: "Basic" },

  { path: APP_ROUTER_PATH.CONTEXT, title: "Context" },

  { path: APP_ROUTER_PATH.CUSTOM_STORE, title: "Store" },

  { path: APP_ROUTER_PATH.REDUX_STORE, title: "Redux" },

  { path: APP_ROUTER_PATH.ZUSTAND_STORE, title: "Zustand" },

  { path: APP_ROUTER_PATH.MOBX_STORE, title: "Mobx" },
];

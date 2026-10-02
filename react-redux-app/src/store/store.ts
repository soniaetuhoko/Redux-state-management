import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import logger from "redux-logger";

// redux-logger is CommonJS. Vite's default import is the module object,
// so use the middleware function itself when that happens.
const loggerMiddleware =
  typeof logger === "function"
    ? logger
    : (logger as unknown as { default: typeof logger }).default;

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

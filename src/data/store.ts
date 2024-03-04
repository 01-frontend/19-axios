import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducer from "./slices";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const setupStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefMiddleware) =>
      getDefMiddleware({ thunk: false }).concat(middlewares),
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

import rootReducer from "./Reducers/";
import rootSaga from "./Sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware, logger)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga)
  return store;
};

export default configureStore;

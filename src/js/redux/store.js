import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import * as sagas from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

for (let k in sagas) {
  sagaMiddleware.run(sagas[k]); //  run the saga
}

export default store;

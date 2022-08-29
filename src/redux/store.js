import { legacy_createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import { loadStateFromLocalStorage } from "./localStoragePersist";
import { validateAttributesMiddleware } from "./validateAttributesMiddleware";

const persistedState = loadStateFromLocalStorage();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducer,
  persistedState,
  storeEnhancers(applyMiddleware(validateAttributesMiddleware))
);

export default store;

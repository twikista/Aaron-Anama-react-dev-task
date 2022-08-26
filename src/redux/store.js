import { legacy_createStore } from "redux";
import reducer from "./reducer";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./localStoragePersist";

const persistedState = loadStateFromLocalStorage();

const store = legacy_createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);

console.log(store.getState());

export default store;

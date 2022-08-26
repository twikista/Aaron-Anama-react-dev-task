const storageKey = "state";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(storageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageKey, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export { loadStateFromLocalStorage, saveStateToLocalStorage };

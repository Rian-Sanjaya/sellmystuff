export const loadAuth = () => {
  try {
    const serializedState = localStorage.getItem('@shazam');
    if (!serializedState) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }

  } catch (err) {
    return undefined;
  }
};

export const saveAuth = (val) => {
  try {
    const state = val;
    const serializedState = JSON.stringify(state);
    localStorage.setItem('@shazam', serializedState); 
  } catch (err) {
    console.log(err);
  }
};
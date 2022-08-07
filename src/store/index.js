import { createStore } from "redux";

const themeReducer = (state = { darkThemeEnabled: false }, action) => {
  if (action.type === "themeChange") {
    return { darkThemeEnabled: !state.darkThemeEnabled };
  }

  return state;
};

const store = createStore(themeReducer);

export default store;

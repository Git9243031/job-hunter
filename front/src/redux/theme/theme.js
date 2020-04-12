import { createAction, handleActions } from "redux-actions";

//#region Actions
export const THEME_ACTIONS = {
  setTheme: "THEME > SET"
};

export const setTheme = createAction(THEME_ACTIONS.setTheme);
//#endregion

//#region Reducer
const themeInitial = localStorage.theme ? localStorage.theme : "light";

export const themeReducer = handleActions(
  {
    [THEME_ACTIONS.setTheme]: state => (state === "light" ? "dark" : "light") // action.payload || state
  },
  themeInitial
);
//#endregion

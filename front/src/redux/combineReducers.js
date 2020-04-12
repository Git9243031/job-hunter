import { combineReducers } from 'redux';
import resumesReducer from './resumes/reducer';
// import { themeReducer } from "./theme/theme";

export const reducers = combineReducers({
  resumes: resumesReducer,
  // theme: themeReducer,
});

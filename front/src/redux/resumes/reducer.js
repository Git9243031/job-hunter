import { handleActions } from 'redux-actions';
import {
  fetchResumesRequest,
  fetchResumesSuccess,
  fetchResumesFailure,
} from './actions';

const initialState = {
  resumes: [],
  resume: {},
  isLoading: false,
  error: null,
};

export default handleActions(
  {
    [fetchResumesRequest]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [fetchResumesSuccess]: (state, action) => ({
      ...state,
      resumes: action.payload,
      isLoading: false,
    }),
    [fetchResumesFailure]: (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false,
    }),
  },
  initialState
);

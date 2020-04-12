import { createActions } from 'redux-actions';

export const {
  fetchResumesRequest,
  fetchResumesSuccess,
  fetchResumesFailure,
} = createActions(
  'FETCH_RESUMES_REQUEST',
  'FETCH_RESUMES_SUCCESS',
  'FETCH_RESUMES_FAILURE'
);

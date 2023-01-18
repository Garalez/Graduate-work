import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
} from './accountRequest.js';

const initialState = {
  status: '',
  token: '',
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        token: action.data,
        error: '',
      };
    case USER_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};

// Action types
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from './AuthUserActionTypes';

const initialState = { 
  error: '',
  isLoggingIn: false, 
  authUser: {}, 
  isLoggingOut: false, 
  isRegisteringUser: false, 
};

export function authUserReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        authUser: action.user,
        isLoggingIn: false
      };
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        error: action.error,
        isLoggingIn: false
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isLoggingOut: true
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        authUser: {}
      };
    }
    case LOGOUT_USER_FAILURE: {
      return {
        ...state,
        isLoggingOut: false,
        error: action.error
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        isRegisteringUser: true
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        isRegisteringUser: false
      };
    }
    case REGISTER_USER_FAILURE: {
      return {
        ...state,
        isRegisteringUser: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
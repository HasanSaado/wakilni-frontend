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
import { isEmpty } from 'lodash';

// Api
import { authUserApi } from 'api';

export function loginUser(fields: any) {
  return async (dispatch: any) => {
    dispatch({type: LOGIN_USER});

    try {
      const result: any = await authUserApi.loginUser(fields);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        user: result,
      });

      if (!isEmpty(result.token)) {
        localStorage.setItem("token", JSON.stringify(result.token));
      }

      return result;
    } catch(error: any) {
      console.log('Login error: ', error);

      dispatch({
        type: LOGIN_USER_FAILURE,
        error: error.message
      });
    }
  }
}

export function registerUser(fields: object) {
  return async (dispatch: any) => {
    dispatch({type: REGISTER_USER});
    try {
      const result: any = await authUserApi.registerUser(fields);
      dispatch({
        type: REGISTER_USER_SUCCESS,
      });
      if (!isEmpty(result?.token)) {
        localStorage.setItem("token", JSON.stringify(result?.token));
      }
      return result;
    } catch(error: any) {
      console.log('Register user Error: ', error);

      dispatch({
        type: REGISTER_USER_FAILURE,
        error: error?.message
      });
    }
  }
}

export function logoutUser() {
  return async (dispatch: any) => {
    dispatch({type: LOGOUT_USER});

    try {
      await authUserApi.logoutUser();
      localStorage.removeItem("token");
      dispatch({type: LOGOUT_USER_SUCCESS});
    } catch(error: any) {
      dispatch({
        type: LOGOUT_USER_FAILURE,
        error: error.message
      });
    }
  }
}

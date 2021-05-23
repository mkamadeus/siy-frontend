import { login } from '~/api/Auth';
import { getAuthenticatedUserData } from '~/api/Session';
import { SessionData } from '~/model/Session';
import { AuthState } from './states';
import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { navigate } from '@reach/router';
import { UserRole } from '~/model/User';

export enum AuthActionConstant {
  LOGIN = 'auth/login',
  LOGIN_SUCCESS = 'auth/login_success',
  LOGIN_FAIL = 'auth/login_fail',
  LOGOUT = 'auth/logout',
}

export type AuthAction =
  | ILogoutAction
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailAction;

export interface ILogoutAction extends Action<AuthActionConstant> {
  type: AuthActionConstant.LOGOUT;
}

export interface ILoginAction extends Action<AuthActionConstant> {
  type: AuthActionConstant.LOGIN;
}

export interface ILoginSuccessAction extends Action<AuthActionConstant> {
  type: AuthActionConstant.LOGIN_SUCCESS;
  payload: {
    accessToken: string;
    refreshToken: string;
    userData: SessionData;
  };
}

export interface ILoginFailAction extends Action<AuthActionConstant> {
  type: AuthActionConstant.LOGIN_FAIL;
}

export const loginAction: ActionCreator<
  ThunkAction<Promise<void>, AuthState, null, Action<AuthActionConstant>>
> = (username: string, password: string) => {
  return async (dispatch, getState) => {
    try {
      // Set login request
      const loginAction: ILoginAction = {
        type: AuthActionConstant.LOGIN,
      };
      dispatch(loginAction);

      const { accessToken, refreshToken } = await login({ username, password });
      const userData = await getAuthenticatedUserData(accessToken);

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Set login success
      const loginSuccessAction: ILoginSuccessAction = {
        type: AuthActionConstant.LOGIN_SUCCESS,
        payload: {
          accessToken,
          refreshToken,
          userData,
        },
      };
      dispatch(loginSuccessAction);

      if (getState().isAuthenticated) {
        if (getState().userData?.role === UserRole.STUDENT)
          navigate('/student');
        else if (getState().userData?.role === UserRole.TEACHER)
          navigate('/teacher');
      }
    } catch (err) {
      // Set login success
      const loginFailAction: ILoginFailAction = {
        type: AuthActionConstant.LOGIN_FAIL,
      };
      dispatch(loginFailAction);
    }
  };
};

export const loginByTokenAction: ActionCreator<
  ThunkAction<Promise<void>, AuthState, null, Action<AuthActionConstant>>
> = () => {
  return async (dispatch, getState) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) throw new Error('No token');

      // Set login request
      const loginAction: ILoginAction = {
        type: AuthActionConstant.LOGIN,
      };
      dispatch(loginAction);

      const userData = await getAuthenticatedUserData(accessToken);

      // Set login success
      const loginSuccessAction: ILoginSuccessAction = {
        type: AuthActionConstant.LOGIN_SUCCESS,
        payload: {
          accessToken,
          refreshToken,
          userData,
        },
      };
      dispatch(loginSuccessAction);
    } catch (err) {
      // Set login success
      const loginFailAction: ILoginFailAction = {
        type: AuthActionConstant.LOGIN_FAIL,
      };
      dispatch(loginFailAction);
    }
  };
};

export const logoutAction: ActionCreator<
  ThunkAction<void, AuthState, null, Action<AuthActionConstant>>
> = () => {
  return async (dispatch) => {
    localStorage.clear();
    // Set logout request
    const logoutAction: ILogoutAction = {
      type: AuthActionConstant.LOGOUT,
    };
    dispatch(logoutAction);
  };
};

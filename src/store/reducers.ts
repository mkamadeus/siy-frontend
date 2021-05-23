import { AuthAction, AuthActionConstant } from './actions';
import { AuthState, initialAuthState } from './states';
import { Reducer } from 'redux';

export const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialAuthState,
  action
) => {
  if (action.type === AuthActionConstant.LOGIN) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === AuthActionConstant.LOGIN_SUCCESS) {
    const { accessToken, refreshToken, userData } = action.payload;
    return {
      ...state,
      isLoading: false,
      isAuthenticated: true,
      accessToken,
      refreshToken,
      userData,
    };
  } else if (action.type === AuthActionConstant.LOGIN_FAIL) {
    return {
      ...state,
      isLoading: false,
      isAuthenticated: false,
    };
  } else if (action.type === AuthActionConstant.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      accessToken: '',
      refreshToken: '',
      userData: null,
    };
  } else return { ...state };
};

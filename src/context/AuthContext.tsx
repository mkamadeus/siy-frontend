import { navigate } from '@reach/router';
import React, { useReducer } from 'react';
import { useAsync } from 'react-use';
import { login } from '~/api/Auth';
import { getAuthenticatedUserData } from '~/api/Session';
import { CredentialsBody } from '~/model/Auth';
import { SessionData } from '~/model/Session';
import { UserRole } from '~/model/User';

export interface AuthContextState {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  userData: SessionData | null;
}

export interface AuthContextValueType {
  authState: AuthContextState;
  doLogin: (data: CredentialsBody) => Promise<void>;
  doLogout: (data: CredentialsBody) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextValueType>({
  authState: {
    isAuthenticated: false,
    userData: {
      role: UserRole.STUDENT,
      data: null,
    },
    accessToken: '',
    refreshToken: '',
  },
  doLogin: async () => {
    return;
  },
  doLogout: async () => {
    return;
  },
});

export enum AuthContextActionType {
  LOGIN = 'login',
  LOGIN_BY_TOKEN = 'login_by_token',
  LOGOUT = 'logout',
}

export interface AuthContextAction {
  type: AuthContextActionType;
  payload?: {
    accessToken: string;
    refreshToken: string;
    userData: SessionData;
  };
}

export const AuthContextReducer: React.Reducer<
  AuthContextState,
  AuthContextAction
> = (state, action) => {
  if (action.type === AuthContextActionType.LOGIN_BY_TOKEN && action.payload) {
    return {
      isAuthenticated: true,
      userData: action.payload.userData,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
    };
  }
  if (action.type === AuthContextActionType.LOGIN && action.payload) {
    localStorage.setItem('accessToken', action.payload.accessToken);
    localStorage.setItem('refreshToken', action.payload.refreshToken);
    return {
      isAuthenticated: true,
      userData: action.payload.userData,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
    };
  } else if (action.type === AuthContextActionType.LOGOUT) {
    localStorage.clear();
    return {
      isAuthenticated: false,
      userData: null,
      accessToken: '',
      refreshToken: '',
    };
  } else return { ...state };
};

export type AuthContextProps = {
  debug?: boolean;
};

const AuthContextProvider: React.FunctionComponent<AuthContextProps> = ({
  debug,
  children,
}) => {
  const [authState, authDispatch] = useReducer(AuthContextReducer, {
    isAuthenticated: false,
    userData: {
      role: UserRole.STUDENT,
      data: null,
    },
    accessToken: '',
    refreshToken: '',
  });

  useAsync(async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      const userData = await getAuthenticatedUserData(accessToken);
      authDispatch({
        type: AuthContextActionType.LOGIN_BY_TOKEN,
        payload: {
          userData: userData,
          accessToken,
          refreshToken,
        },
      });
    }
  }, []);

  const doLogin = async (data: CredentialsBody): Promise<void> => {
    const token = await login(data);
    const userData = await getAuthenticatedUserData(token.accessToken);
    authDispatch({
      type: AuthContextActionType.LOGIN,
      payload: {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        userData,
      },
    });
    navigate('/student');
  };

  const doLogout = async (data: CredentialsBody): Promise<void> => {
    authDispatch({ type: AuthContextActionType.LOGOUT });
    navigate('/student');
  };

  return (
    <AuthContext.Provider value={{ authState, doLogin, doLogout }}>
      {/* {isLoading && !userError ? <LoadingPage /> : children} */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

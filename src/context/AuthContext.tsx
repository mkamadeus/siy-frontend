import { navigate } from '@reach/router';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useAsync, useLocalStorage } from 'react-use';
import { refresh } from '~/api/Auth';
import {
  getAuthenticatedUserData,
} from '~/api/Session';
import { Student } from '~/model/Student';
import { Teacher } from '~/model/Teacher';
import { UserRole } from '~/model/User';
import LoadingPage from '~/pages/common/LoadingPage';

export interface IAuthContext {
  isLoading: boolean;
  isAuthenticated: boolean;
  authorizedAs: UserRole;
  userData: Student | Teacher | null;
}

export const AuthContext = React.createContext<IAuthContext>({
  isLoading: false,
  isAuthenticated: false,
  authorizedAs: UserRole.STUDENT,
  userData: null,
});

export type AuthContextProps = {
  debug?: boolean;
};

const AuthContextProvider: React.FunctionComponent<AuthContextProps> = ({
  debug,
  children,
}) => {
  const [accessToken, setAccessToken, removeAccessToken] =
    useLocalStorage<string>('accessToken');
  const [refreshToken, , removeRefreshToken] =
    useLocalStorage<string>('refreshToken');

  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useQuery('student', () => {
    if (!accessToken) throw new Error('No access token!');
    return getAuthenticatedUserData(accessToken);
  });

  const isLoading = useMemo(() => isUserLoading, [isUserLoading]);

  useAsync(async () => {
    try {
      if (userError) throw userError;
      // if (gradesError) throw gradesError;
      if (!refreshToken) throw new Error('No refresh token!');

      const token = await refresh({ refreshToken: refreshToken as string });
      setAccessToken(token.accessToken);
    } catch (err) {
      removeAccessToken();
      removeRefreshToken();
      if (!debug) navigate('/');
    }
  }, [accessToken, userError]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userData,
      }}
    >
      {isLoading ? <LoadingPage /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

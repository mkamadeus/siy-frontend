import { SessionData } from '~/model/Session';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  isLoading: boolean;
  userData: SessionData | null;
}

export const initialAuthState: AuthState = {
  accessToken: localStorage.getItem('accessToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
  isAuthenticated: false,
  isLoading: false,
  userData: null,
};

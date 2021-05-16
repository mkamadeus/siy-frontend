import { SessionData } from '~/model/Session';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  userData: SessionData | null;
}

export const initialAuthState: AuthState = {
  accessToken: localStorage.getItem('accessToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
  isAuthenticated: false,
  userData: null,
};

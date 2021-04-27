import { CredentialsBody, RefreshBody, Token } from '~/model/Auth';
import { BaseInstance } from './Base';

export const login = async (credentials: CredentialsBody): Promise<Token> => {
  const token = await BaseInstance.post<Token>('/auth/login', credentials);
  return token.data;
};

export const refresh = async (refreshToken: RefreshBody): Promise<Token> => {
  const token = await BaseInstance.post<Token>('/auth/refresh', refreshToken);
  return token.data;
};

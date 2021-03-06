export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface CredentialsBody {
  username: string;
  password: string;
}

export interface RegisterBody {
  username: string;
  nim: string;
  password: string;
  role: string;
}

export interface RefreshBody {
  refreshToken: string;
}

export interface DecodedToken {
  id: number;
  iat: number;
  exp: number;
}

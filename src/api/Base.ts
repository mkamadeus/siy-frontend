import axios, { AxiosInstance } from 'axios';

export const BaseInstance = axios.create({
  baseURL: import.meta.env.SNOWPACK_PUBLIC_API_URL,
});

export const AuthInstance = (token: string): AxiosInstance =>
  axios.create({
    baseURL: import.meta.env.SNOWPACK_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

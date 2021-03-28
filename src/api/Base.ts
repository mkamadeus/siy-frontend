import axios from 'axios';

export const BaseInstance = axios.create({
  baseURL: import.meta.env.SNOWPACK_PUBLIC_API_URL,
});
export const AuthInstance = axios.create({
  baseURL: import.meta.env.SNOWPACK_PUBLIC_API_URL,
});

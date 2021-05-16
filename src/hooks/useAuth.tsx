import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { SessionData } from '~/model/Session';
import { AuthAction, loginAction, loginByTokenAction } from '~/store/actions';
import { AuthState } from '~/store/states';

export const useAuth = () => {
  const dispatch = useDispatch<ThunkDispatch<AuthState, null, AuthAction>>();
  const authState = useSelector<AuthState, AuthState>((state) => state);
  const userData = useSelector<AuthState, SessionData | null>(
    (state) => state.userData
  );

  // console.log(authState);
  const login = async (username: string, password: string) => {
    await dispatch(loginAction(username, password));
  };

  const loginByToken = async () => {
    await dispatch(loginByTokenAction());
  };

  return { authState, userData, login, loginByToken };
};

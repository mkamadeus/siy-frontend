import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AuthAction, loginAction, logoutAction } from '~/store/actions';
import { AuthState } from '~/store/states';

export const useAuth = (): Promise<void> => {
  const dispatch = useDispatch<ThunkDispatch<AuthState, null, AuthAction>>();
  const authState = useSelector<AuthState, AuthState>((state) => state);
  // const location = useLocation();

  const login = async (username: string, password: string) => {
    await dispatch(loginAction(username, password));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  // useEffect(() => {
  //   console.log(authState);
  //   if (
  //     !authState.isLoading &&
  //     authState.accessToken === '' &&
  //     !authState.isAuthenticated
  //   ) {
  //     navigate('/');
  //   }
  // }, [authState]);

  return { authState, login, logout };
};

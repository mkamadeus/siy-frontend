import React from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import { UserRole } from '~/model/User';
import { useAuth } from '~/hooks/useAuth';
import LoadingPage from '~/pages/common/LoadingPage';

interface Props extends RouteComponentProps {
  component: React.FunctionComponent<RouteComponentProps>;
  role: UserRole;
}

const PrivateRoute: React.FunctionComponent<Props> = ({
  component: Comp,
  role,
  ...rest
}: Props) => {
  const { authState } = useAuth();

  // IMPORTANT
  if (authState.isLoading) return <LoadingPage />;

  if (authState.isAuthenticated && authState.userData?.role === role)
    return <Comp {...rest} />;

  return <Redirect from="" to="/" noThrow />;
};

export default PrivateRoute;

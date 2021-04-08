import { RouteComponentProps } from '@reach/router';
import React, { useEffect } from 'react';

const LoginPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  useEffect(() => {
    // if (true) {
    window.location.href = `https://login.itb.ac.id/cas/login?service=${
      import.meta.env.SNOWPACK_PUBLIC_WEB_URL
    }`;
    // }
  }, []);

  return <div>hehe loading</div>;
};

export default LoginPage;

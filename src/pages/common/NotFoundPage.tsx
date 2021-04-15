import React from 'react';
import { RouteComponentProps } from '@reach/router';

const NotFoundPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  return (
    <div className="flex flex-col w-full min-h-screen p-6 justify-center">
      <div className="text-4xl font-bold">Oops!</div>
      <div className="text-lg italic">Page not found!</div>
    </div>
  );
};

export default NotFoundPage;

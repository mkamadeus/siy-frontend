import React from 'react';
import { RouteComponentProps } from '@reach/router';

const IndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  return (
    <div className="container mx-auto p-6">
      <div>Welcome to Si-Y homepage</div>
    </div>
  );
};

export default IndexPage;

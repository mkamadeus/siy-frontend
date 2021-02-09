import React from 'react';
import Navbar from '../components/Navbar';
import { RouteComponentProps } from '@reach/router';

const IndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  return (
    <div>
      <Navbar />
      <div>asdasdas</div>
    </div>
  );
};

export default IndexPage;

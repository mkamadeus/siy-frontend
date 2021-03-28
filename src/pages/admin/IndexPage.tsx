import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getCourseData } from '~/api/Teacher';
import LoadingPage from '../LoadingPage';

const IndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('courses', getCourseData);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div>Welcome to SIY homepage</div>
      <div>
        <div>Directory</div>
      </div>
    </div>
  );
};

export default IndexPage;

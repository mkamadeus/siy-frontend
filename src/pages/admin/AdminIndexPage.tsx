import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { useAuth } from '~/hooks/useAuth';
import { getLoAssessment } from '~/api/LOAssessment';
import LoadingPage from '../common/LoadingPage';

const AdminIndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { authState } = useAuth();
  const { data, isLoading } = useQuery('loAssessment', () =>
    getLoAssessment(authState.accessToken, 2020, 2)
  );

  if (!data || isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="container mx-auto p-6">
      <div className="text-4xl font-bold">Preview LO Assessment</div>
      <div className="font-bold text-center">{data}</div>
    </div>
  );
};

export default AdminIndexPage;

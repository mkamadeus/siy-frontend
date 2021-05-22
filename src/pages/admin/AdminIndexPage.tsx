import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getAllCourses } from '~/api/Course';
import LoadingPage from '../common/LoadingPage';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const AdminIndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('loAssessment', getLoAsssessment);

  return (
    <div className="container mx-auto p-6">
      <div className="text-4xl font-bold">Preview LO Assessment</div>
      <div className="font-bold text-center">{data}</div>
    </div>
  );
};

export default AdminIndexPage;

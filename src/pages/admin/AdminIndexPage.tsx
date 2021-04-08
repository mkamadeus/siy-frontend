import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getCourseData } from '~/api/Teacher';
import LoadingPage from '../common/LoadingPage';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const AdminIndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('courses', getCourseData);

  if (isLoading) {
    return <LoadingPage />;
  }

  const hehe = () => {
    const swal = withReactContent(Swal);
    swal.fire('asdasd');
  };

  return (
    <div className="container mx-auto p-6">
      <div>Welcome to SIY homepage</div>
      <div>
        <div>
          <button onClick={hehe}>sadasd</button>
        </div>
      </div>
    </div>
  );
};

export default AdminIndexPage;

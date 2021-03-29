import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getCourseData } from '~/api/Teacher';
import LoadingPage from '~/pages/common/LoadingPage';
import { Teacher } from '~/model/Teacher';

const AdminTeacherPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('userID', getCourseData);

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Teacher</div>
      <div className="flex flex-col space-y-4">
        <div>
          <button
            className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            onClick={() => {
              navigate('/admin/teacher/create');
            }}
          >
            Create new Teacher...
          </button>
        </div>
        <div>
          <Teacher teacher={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminTeacherPage;

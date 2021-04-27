import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getAllTeachers } from '~/api/Teacher';
import LoadingPage from '~/pages/common/LoadingPage';
import TeacherTable from '~/components/page/TeacherTable';

const AdminTeacherPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('teachers', getAllTeachers);

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-4 text-sm">
        <div className="flex justify-between mb-4">
          <div className="font-bold text-3xl">Teachers</div>
          <button
            className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            onClick={() => {
              navigate('/admin/teacher/create');
            }}
          >
            Create new teacher...
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <TeacherTable teachers={data} />
      </div>
    </div>
  );
};

export default AdminTeacherPage;
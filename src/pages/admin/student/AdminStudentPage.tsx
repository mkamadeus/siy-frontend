import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getAllStudents } from '~/api/Student';
import LoadingPage from '~/pages/common/LoadingPage';
import StudentTable from '~/components/page/StudentTable';

const AdminStudentPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('students', getAllStudents);

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-4 text-sm">
        <div className="flex justify-between mb-4">
          <div className="font-bold text-3xl">Student</div>
          <button
            className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            onClick={() => {
              navigate('/admin/student/create');
            }}
          >
            Create new student...
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <StudentTable students={data} />
      </div>
    </div>
  );
};

export default AdminStudentPage;

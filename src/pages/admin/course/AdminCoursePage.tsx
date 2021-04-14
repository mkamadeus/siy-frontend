import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getAllCourses } from '~/api/Course';
import LoadingPage from '~/pages/common/LoadingPage';
import CourseTable from '~/components/page/CourseTable';

const AdminCoursePage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('courses', getAllCourses);

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-4 text-sm">
        <div className="flex justify-between mb-4">
          <div className="font-bold text-3xl">Courses</div>
          <button
            className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            onClick={() => {
              navigate('/admin/course/create');
            }}
          >
            Create new course...
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <CourseTable courses={data} />
      </div>
    </div>
  );
};

export default AdminCoursePage;

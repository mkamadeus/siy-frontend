import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getCourseData } from '~/api/Teacher';
import LoadingPage from '../LoadingPage';
import CourseTable from '~/components/page/CourseTable';
import Button from '~/components/common/Button';

const AdminCoursePage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('courses', getCourseData);

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Courses</div>
      <div className="flex flex-col space-y-4">
        <div>
          <Button>Create new course...</Button>
        </div>
        <div>
          <CourseTable courses={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminCoursePage;

import React from 'react';
import { RouteComponentProps } from '@reach/router';
import LoadingPage from '../common/LoadingPage';
import { getLecturesByTeacherId } from '~/api/Lecture';
import { useQuery } from 'react-query';
import TeacherLectureTable from '~/components/page/teacherDashboard/TeacherLectureTable';

const TeacherIndexPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery(['lectures', 1], () =>
    getLecturesByTeacherId(1)
  );

  if (!data || isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="text-xl font-bold mb-4">Kelas Saat Ini</div>
      <div className="mb-4">
        <TeacherLectureTable lectures={data} />
      </div>
    </div>
  );
};

export default TeacherIndexPage;
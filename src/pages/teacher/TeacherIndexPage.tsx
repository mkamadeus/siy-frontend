import React from 'react';
import { RouteComponentProps } from '@reach/router';
import LoadingPage from '../common/LoadingPage';
import { useQuery } from 'react-query';
import TeacherLectureTable from '~/components/page/teacherDashboard/TeacherLectureTable';
import { getTeachingHistoriesByTeacherId } from '~/api/TeachingHistory';

const TeacherIndexPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery(['teaching-history', 1], () =>
    getTeachingHistoriesByTeacherId(6)
  );

  if (!data || isLoading) {
    return <LoadingPage />;
  }

  const now = new Date();
  const yearNow = now.getFullYear();
  const monthNow = now.getMonth();
  const semesterNow = monthNow/6 < 1 ? 2 : 1;

  const lectures = data.map((tH) => { return tH.lecture });

  const currentLecture = lectures.filter((lecture) => {
    return lecture.year == (yearNow - (semesterNow - 1)) && lecture.semester == semesterNow;
  });

  const pastLecture = lectures.filter((lecture) => {
    return lecture.year == (yearNow - (semesterNow - 1)) && lecture.semester < semesterNow;
  });

  return (
    <div className="container mx-auto p-6">
      <div className="text-xl font-bold mb-4">Kelas Saat Ini</div>
      <div className="mb-4">
        <TeacherLectureTable lectures={currentLecture} />
      </div>
      <div className="text-xl font-bold mb-4">Kelas yang Lalu</div>
      <div className="mb-4">
        <TeacherLectureTable lectures={pastLecture} />
      </div>
    </div>
  );
};

export default TeacherIndexPage;

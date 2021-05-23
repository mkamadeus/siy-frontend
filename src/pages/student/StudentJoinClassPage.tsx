import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getLectureByYearSemester } from '~/api/Lecture';
import LoadingPage from '../common/LoadingPage';
import { getCourseById } from '~/api/Course';

interface Props {
  courseId: number;
}

const JoinClassButton: React.FC<Props> = ({ courseId }: Props) => {
  const { data: course, isLoading } = useQuery(['course', courseId], () =>
    getCourseById(courseId)
  );

  if (isLoading || !course) {
    return null;
  }

  return (
    <div className="p-4 rounded-lg">
      <div className="font-semibold text-lg">
        {course.code} {course.name}
      </div>
      <div></div>
    </div>
  );
};

const StudentJoinClassPage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { data: lectures, isLoading } = useQuery('lectures', () =>
    getLectureByYearSemester(2020, 2)
  );

  if (isLoading || !lectures) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-xl mb-4">Daftar Kelas</div>
      <div className="">
        {lectures.map((lecture) => {
          return <JoinClassButton key={lecture.id} courseId={lecture.courseId} />;
        })}
      </div>
    </div>
  );
};

export default StudentJoinClassPage;

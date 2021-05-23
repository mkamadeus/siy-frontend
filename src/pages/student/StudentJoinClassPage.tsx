import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getLectureByYearSemester } from '~/api/Lecture';
import LoadingPage from '../common/LoadingPage';
import { getCourseById } from '~/api/Course';
import { getAuthenticatedLectureHistory } from '~/api/Session';
import { useAuth } from '~/hooks/useAuth';
import { Student } from '~/model/Student';

interface Props {
  courseId: number;
  hasJoined: boolean;
}

const JoinClassButton: React.FC<Props> = ({ courseId, hasJoined }: Props) => {
  const { data: course, isLoading } = useQuery(['course', courseId], () =>
    getCourseById(courseId)
  );

  if (isLoading || !course) {
    return null;
  }

  return (
    <div className="p-3 rounded-lg shadow-md text-sm border border-gray-300">
      <div className="font-semibold">
        {course.code} {course.name}
      </div>
      <div className="italic text-xs mb-2">{course.briefSyllabus}</div>
      {!hasJoined && (
        <button className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300 hover:-translate-y-1">
          Join Class
        </button>
      )}
    </div>
  );
};

const StudentJoinClassPage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { authState } = useAuth();
  const student = authState.userData?.userData as Student;
  const { data: lectures, isLoading: isLectureLoading } = useQuery(
    'lectures',
    () => getLectureByYearSemester(2020, 2)
  );
  const { data: lectureHistories, isLoading: isLectureHistoryLoading } =
    useQuery('lectureHistoiries', () =>
      getAuthenticatedLectureHistory(authState.accessToken)
    );

  if (
    isLectureLoading ||
    !lectures ||
    isLectureHistoryLoading ||
    !lectureHistories
  ) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-2">
        <div>
          <img
            src={'https://github.com/identicons/mkamadeus.png'}
            className="w-12 h-12"
          />
        </div>
        <div className="p-2">
          <div className="font-bold text-lg">{student.name}</div>
          <div className="text-sm italic">{student.nim}</div>
        </div>
      </div>
      <div className="font-bold text-xl mb-4">Daftar Kelas Saat Ini</div>
      <div className="mb-4">
        {lectureHistories.map(({ lecture }, index) => {
          return (
            <div className="mb-2" key={`class-button-has-${index}`}>
              <JoinClassButton courseId={lecture.courseId} hasJoined={true} />
            </div>
          );
        })}
      </div>
      <div className="font-bold text-xl mb-4">Pendaftaran Kelas</div>
      <div className="mb-4">
        {lectures.map((lecture, index) => {
          return (
            <div className="mb-2" key={`class-button-has-${index}`}>
              <JoinClassButton courseId={lecture.courseId} hasJoined={false} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentJoinClassPage;

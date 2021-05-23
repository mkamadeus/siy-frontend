import React from 'react';
import { RouteComponentProps } from '@reach/router';
import LoadingPage from '../common/LoadingPage';
import { useQuery } from 'react-query';
import TeacherLectureTable from '~/components/page/teacherDashboard/TeacherLectureTable';
import { getAuthenticatedTeachingHistory } from '~/api/Session';
import { useAuth } from '~/hooks/useAuth';
import { Teacher } from '~/model/Teacher';
import ITBBackground from '~/images/itbBackground.png';

const TeacherIndexPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { authState } = useAuth();
  const teacher = authState.userData?.userData as Teacher;
  const { data, isLoading } = useQuery('teaching-histories', () =>
    getAuthenticatedTeachingHistory(authState.accessToken)
  );

  if (!data || isLoading) {
    return <LoadingPage />;
  }

  const now = new Date();
  const yearNow = now.getFullYear();
  const monthNow = now.getMonth();
  const semesterNow = monthNow / 6 < 1 ? 2 : 1;

  const lectures = data.map((tH) => {
    return tH.lecture;
  });

  const currentLecture = lectures.filter((lecture) => {
    return (
      lecture.year == yearNow - (semesterNow - 1) &&
      lecture.semester == semesterNow
    );
  });

  const pastLecture = lectures.filter((lecture) => {
    return (
      lecture.year == yearNow - (semesterNow - 1) &&
      lecture.semester < semesterNow
    );
  });

  return (
    <>
      <div className="flex flex-col mb-2 items-center relative bg-gradient-to-b from-blue-500 to to-blue-600 p-6">
        <div className="flex flex-col items-center z-10">
          <img
            src={'https://github.com/identicons/mkamadeus.png'}
            className="w-12 h-12"
          />
          <div className="text-center text-xl font-bold text-white">
            {teacher.name}
          </div>
          <div className="flex space-x-2 items-center text-center italic font-semibold">
            {/* <div className="w-6 h-6 text-white">
              <AcademicCapSolid />
            </div> */}
            {/* <div className="text-white">IPK/NR : {student.gpa}</div> */}
          </div>
        </div>
        <img className="absolute bottom-0 z-0" src={ITBBackground} />
      </div>
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
    </>
  );
};

export default TeacherIndexPage;

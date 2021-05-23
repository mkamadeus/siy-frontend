import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import { getLectureById } from '~/api/Lecture';
import { getTeacherById } from '~/api/Teacher';
import TeacherLoTable from '~/components/page/teacherDashboard/TeacherLoTable';
import TeacherPortfolio from '~/components/page/teacherDashboard/TeacherPortfolio';
import TeacherUpload from '~/components/page/teacherDashboard/TeacherUpload';
import { useAuth } from '~/hooks/useAuth';
import { Teacher } from '~/model/Teacher';
import LoadingPage from '../common/LoadingPage';
import ITBBackground from '~/images/itbBackground.png';

interface RouteProps {
  id: number;
}

const TeacherLectureEditPage: React.FC<RouteComponentProps<RouteProps>> = (
  props: RouteComponentProps<RouteProps>
) => {
  const { authState } = useAuth();

  const lectureId = props.id as number;
  const { data: lecture, isLoading: isLectureloading } = useQuery(
    ['lecture', lectureId],
    () => getLectureById(lectureId)
  );

  const { data: course, isLoading: isCourseLoading } = useQuery(
    ['course-lecture', lectureId],
    async () => {
      return getLectureById(lectureId).then((lecture) =>
        getCourseById(lecture.courseId)
      );
    }
  );

  const teacherId = (authState.userData?.userData as Teacher).id;
  const { data: teacher, isLoading: isTeacherLoading } = useQuery(
    ['teacher', teacherId],
    () => getTeacherById(teacherId)
  );

  if (!lecture || isLectureloading) return <LoadingPage />;
  if (!course || isCourseLoading) return <LoadingPage />;
  if (!teacher || isTeacherLoading) return <LoadingPage />;

  return (
    <>
      <div className="flex flex-col mb-2 items-center relative bg-gradient-to-b from-blue-500 to to-blue-600 p-6">
        <div className="z-10">
          <div className="text-2xl font-bold 5 text-white">
            {course.code} {course.name}
          </div>
          <div className="text-gray-200 italic text-center">
            Tahun {lecture.year}/{lecture.year + 1} Semester {lecture.semester}
          </div>
        </div>
        <img className="absolute bottom-0 z-0" src={ITBBackground} />
      </div>
      <div className="container mx-auto p-6">
        <div className="text-xl font-bold mb-2">Bobot LO</div>
        <div className="flex flex-col mb-4">
          <TeacherLoTable lecture={lecture} />
        </div>
        <div className="text-xl font-bold mb-2">
          Input Nilai Mahasiswa
          <p className="text-sm font-normal text-gray-500">
            Masukan file bertipe .csv, .xls, atau .xlsx
          </p>
        </div>
        <div className="mb-4">
          <TeacherUpload lecture={lecture} />
        </div>
        <div className="text-xl font-bold mb-2">
          Portofolio
          <p className="text-sm font-normal text-gray-500">
            Masukan nilai antara 0 hingga 100
          </p>
        </div>
        <div className="mb-4">
          <TeacherPortfolio lecture={lecture} teacher={teacher} />
        </div>
      </div>
    </>
  );
};

export default TeacherLectureEditPage;

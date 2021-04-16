import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import LoadingPage from '~/pages/common/LoadingPage';
import { getLectureById } from '~/api/Lecture';
import TeacherStudentTable from '~/components/page/teacherDashboard/TeacherStudentTable';
import { getAllStudents } from '~/api/Student';
import QuickTileButton from '~/components/common/QuickTileButton';
import { MenuSolid } from '@graywolfai/react-heroicons';
import TeacherLoTable from '~/components/page/teacherDashboard/TeacherLoTable';
import TeacherUpload from '~/components/page/teacherDashboard/TeacherUpload';
// import CourseTable from '~/components/page/CourseTable';

interface RouteProps {
  id: number;
}

const TeacherLecturePage: React.FC<RouteComponentProps<RouteProps>> = (
  props: RouteComponentProps<RouteProps>
) => {
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
  const { data: students, isLoading: isStudentsLoading } = useQuery(
    'students',
    getAllStudents
  );

  if (!lecture || isLectureloading) return <LoadingPage />;
  if (!course || isCourseLoading) return <LoadingPage />;
  if (!students || isStudentsLoading) return <LoadingPage />;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col w-full mb-4">
        <div className="text-2xl font-bold">
          {course.code} {course.name}
        </div>
        <div className="text-gray-500 italic">
          Tahun {lecture.year}/{lecture.year + 1} Semester {lecture.semester}
        </div>
      </div>
      <div className="text-xl font-bold mb-2">Daftar Peserta Kelas</div>
      <div className="mb-4">
        <TeacherStudentTable students={students} lectureId={lectureId} />
      </div>
      <div className="text-xl font-bold mb-2">Bobot LO</div>
      <div className="flex flex-col mb-4">
        <TeacherLoTable lecture={lecture} />
      </div>
      <div className="text-xl font-bold mb-2">Input Nilai Mahasiswa</div>
      <div className="mb-4">
        <TeacherUpload lecture={lecture} />
      </div>
      <div className="text-xl font-bold mb-2">Navigasi</div>
      <div className="flex flex-wrap mb-4">
        <div className="p-1.5">
          <QuickTileButton
            to={'/teacher/class/form'}
            icon={<MenuSolid />}
            title={'Pengaturan Bobot'}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherLecturePage;

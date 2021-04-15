import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import LoadingPage from '~/pages/common/LoadingPage';
import { getLectureById } from '~/api/Lecture';
import TeacherStudentTable from '~/components/page/teacherDashboard/TeacherStudentTable';
import { getAllStudents } from '~/api/Student';
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
  const courseId = lecture?.courseId as number;
  const { data: course, isLoading: isCourseLoading } = useQuery(
    ['course', courseId],
    () => getCourseById(courseId)
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
      <div className="flex items-center justify-between w-full mb-4">
        <div className="text-xl font-bold">
          {course.code} {course.name}
        </div>
        <button className="bg-white shadow border border-blue-500 text-blue-500 p-2 rounded-full text-sm focus:outline-none">
          Bulk upload
        </button>
      </div>
      <div className="mb-4">
        <TeacherStudentTable students={students} lectureId={lectureId} />
      </div>
    </div>
  );
};

export default TeacherLecturePage;

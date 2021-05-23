import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getLectureById } from '~/api/Lecture';
import { getStudentById } from '~/api/Student';
// import { getGradeById } from '~/api/Grade';
import LoadingPage from '../common/LoadingPage';
import { getCourseById } from '~/api/Course';
import GradeForm from '~/components/page/teacherDashboard/TeacherGradeForm';
import { getGradeById } from '~/api/Grade';

interface RouteProps {
  lId: number;
  sId: string;
  gId: number;
}

const TeacherGradeEditPage: React.FC<RouteComponentProps<RouteProps>> = (
  props: RouteComponentProps<RouteProps>
) => {
  const lectureId = props.lId as number;
  const studentId = props.sId as string;
  const gradeId = props.gId as number;

  const { data: lecture, isLoading: isLectureloading } = useQuery(
    ['lecture', lectureId],
    () => getLectureById(lectureId)
  );

  const { data: student, isLoading: isStudentLoading } = useQuery(
    ['student', studentId],
    () => getStudentById(studentId)
  );

  const { data: grade, isLoading: isGradeLoading } = useQuery(
    ['grade', gradeId],
    () => getGradeById(gradeId)
  );

  const courseId = lecture ? lecture.courseId : 0;
  const { data: course, isLoading: isCourseLoading } = useQuery(
    ['course', courseId],
    () => getCourseById(courseId)
  );

  if (!lecture || isLectureloading) return <LoadingPage />;
  if (!student || isStudentLoading) return <LoadingPage />;
  if (!course || isCourseLoading) return <LoadingPage />;
  if (!grade || isGradeLoading) return <LoadingPage />;
  
  // const courseId = lecture.courseId;
  // const { data: course, isLoading: isCourseLoading } = useQuery(
  //   ['course', courseId],
  //   () => getCourseById(courseId)
  // );

  // if (!course || isCourseLoading) return <LoadingPage />;

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
      <div className="flex flex-col w-full mb-4">
        <div className="text-xl font-bold">{student.name}</div>
        <div className="text-sm text-gray-500 italic">{student.nim}</div>
      </div>
      <GradeForm grade={grade} />
    </div>
  );
}

export default TeacherGradeEditPage;
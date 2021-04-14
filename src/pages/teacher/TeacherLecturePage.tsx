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
      <div className="text-xl font-bold mb-4">
        {course.code} {course.name}
      </div>
      <div className="mb-4">
        <TeacherStudentTable students={students} lectureId={lectureId} />
      </div>
    </div>

    // <table className="table-auto w-full text-xs">
    //   <thead>
    //     <tr className="border-b border-gray-400 ">
    //       <th className="p-1">Edit</th>
    //       <th className="p-1">Kode Kuliah</th>
    //       <th className="p-1 text-left">Mata Kuliah</th>
    //       <th className="p-1">SKS</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data
    //       .sort((a, b) => (a.id > b.id ? 1 : -1))
    //       .map((course, index) => {
    //         return (
    //           <tr className="border-b border-gray-400" key={`course-${index}`}>
    //             <td className="p-1 text-center flex justify-center space-x-3">
    //               <Link to={'form'}>
    //                 <PencilOutline className="h-5 w-5 text-gray-600" />
    //               </Link>
    //             </td>
    //             <td className="p-1 text-center">{course.code}</td>
    //             <td className="p-1">{course.name}</td>
    //             <td className="p-1 text-center">{course.credits}</td>
    //           </tr>
    //         );
    //       })}
    //   </tbody>
    // </table>
  );
};

export default TeacherLecturePage;

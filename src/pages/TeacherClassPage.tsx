import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

import { getAllCourses } from '~/api/Course';
import { useQuery } from 'react-query';
import LoadingPage from './common/LoadingPage';
// import CourseTable from '~/components/page/CourseTable';
import { PencilOutline } from '@graywolfai/react-heroicons';

const TeacherClassPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('course', getAllCourses);
  if (isLoading || !data) {
    return <LoadingPage />;
  }
  if (data.length === 0) {
    return (
      <div className="text-center italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1">Edit</th>
          <th className="p-1">Kode Kuliah</th>
          <th className="p-1 text-left">Mata Kuliah</th>
          <th className="p-1">SKS</th>
        </tr>
      </thead>
      <tbody>
        {data
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((course, index) => {
            return (
              <tr className="border-b border-gray-400" key={`course-${index}`}>
                <td className="p-1 text-center flex justify-center space-x-3">
                  <Link to={'form'}>
                    <PencilOutline className="h-5 w-5 text-gray-600" />
                  </Link>
                </td>
                <td className="p-1 text-center">{course.code}</td>
                <td className="p-1">{course.name}</td>
                <td className="p-1 text-center">{course.credits}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
  //   if (isLoading || !data) {
  //     return <LoadingPage />;
  //   }
  //   return (
  //     <div className="mt-10">
  //       <CourseTable data={data} />
  //       <Link
  //         to="/teacher/class/form"
  //         className="box-content h-60 w-60 m-11 p-5 border-4"
  //       >
  //         Nilai
  //       </Link>
  //     </div>
  //   );
};

export default TeacherClassPage;

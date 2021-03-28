import React from 'react';
import { Course } from '~/model/Course';

interface Props {
  courses: Course[];
}

const CourseTable: React.FunctionComponent<Props> = ({ courses }: Props) => {
  if (courses.length === 0) {
    return (
      <div className="text-center italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1">ID</th>
          <th className="p-1 text-left">Kode</th>
          <th className="p-1">Nama</th>
          <th className="p-1">Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => {
          return (
            <tr className="border-b border-gray-400" key={`course-${index}`}>
              <td className="p-1 text-center">{course.id}</td>
              <td className="p-1">{course.code}</td>
              <td className="p-1 text-center">{course.name}</td>
              <td className="p-1 text-center">
                <div>a</div>
                <div>b</div>
                <div>c</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseTable;

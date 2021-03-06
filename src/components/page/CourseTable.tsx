import {
  EyeOutline,
  PencilOutline,
  TrashOutline,
} from '@graywolfai/react-heroicons';
import { Link } from '@reach/router';
import React from 'react';
import { useMutation } from 'react-query';
import { deleteCourse } from '~/api/Course';
import { Course } from '~/model/Course';

interface Props {
  courses: Course[];
}

const CourseTable: React.FunctionComponent<Props> = ({ courses }: Props) => {
  const deleteCourseMutation = useMutation(deleteCourse);

  if (courses.length === 0) {
    return (
      <div className="text-center italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1 text-center w-1/12">ID</th>
          <th className="p-1 text-center w-1/12">Kode</th>
          <th className="p-1 text-left w-9/12">Nama</th>
          <th className="p-1 text-center w-1/12">Action</th>
        </tr>
      </thead>
      <tbody>
        {courses
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((course, index) => {
            return (
              <tr className="border-b border-gray-400" key={`course-${index}`}>
                <td className="p-1 text-center">{course.id}</td>
                <td className="p-1 text-center">{course.code}</td>
                <td className="p-1 text-left">{course.name}</td>
                <td className="p-1 text-center flex justify-center space-x-3">
                  <Link to={`${course.id}`}>
                    <EyeOutline className="h-5 w-5 text-gray-500" />
                  </Link>
                  <div
                    onClick={async () => {
                      try {
                        if (
                          confirm(
                            `Apakah Anda yakin mau menghapus ${course.code} ${course.name}?`
                          )
                        ) {
                          await deleteCourseMutation.mutateAsync(course.id);
                          alert('Berhasil!');
                        }
                      } catch {
                        alert('Gagal :(');
                      }
                    }}
                  >
                    <TrashOutline className="h-5 w-5 text-gray-600" />
                  </div>
                  <Link to={`edit/${course.id}`}>
                    <PencilOutline className="h-5 w-5 text-gray-600" />
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CourseTable;

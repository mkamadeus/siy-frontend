import { Link } from '@reach/router';
import React from 'react';
import {
  PencilOutline,
  TrashOutline,
  EyeOutline,
} from '@graywolfai/react-heroicons';
import { useMutation } from 'react-query';
import { Lecture } from '~/model/Lecture';
import { deleteCourse } from '~/api/Course';
import { Course } from '~/model/Course';

interface Props {
  lectures: Lecture[],
  courses: Course[]
}

const LectureTable: React.FunctionComponent<Props> = ({ lectures, courses }: Props) => {
  const deleteCourseMutation = useMutation(deleteCourse);

  if (lectures.length === 0) {
    return (
      <div className="text-center w-full italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1 text-center w-1/10">ID</th>
          <th className="p-1 text-left w-6/10">Mata Kuliah</th>
          <th className="p-1 text-center w-1/10">Tahun</th>
          <th className="p-1 text-center w-1/10">Semester</th>
          <th className="p-1 text-center w-1/10">Action</th>
        </tr>
      </thead>
      <tbody>
        {lectures
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((lecture, index) => {
            return (
              <tr className="border-b border-gray-400" key={`course-${index}`}>
                <td className="p-1 text-center">{lecture.id}</td>
                <td className="p-1 text-left">
                  {courses.find((course) => {
                    return course.id == lecture.courseId
                  })?.name}
                </td>
                <td className="p-1 text-center">{lecture.year}</td>
                <td className="p-1 text-center">{lecture.semester}</td>
                <td className="p-1 text-center flex justify-center space-x-3">
                  <Link to={`${lecture.id}`}>
                    <EyeOutline className="h-5 w-5 text-gray-500" />
                  </Link>
                  <div
                    onClick={async () => {
                      try {
                        if (
                          confirm(
                            `Apakah Anda yakin mau menghapus ${lecture.id}?`
                          )
                        ) {
                          await deleteCourseMutation.mutateAsync(lecture.id);
                          alert('Berhasil!');
                        }
                      } catch {
                        alert('Gagal :(');
                      }
                    }}
                  >
                    <TrashOutline className="h-5 w-5 text-gray-600" />
                  </div>
                  <Link to={`edit/${lecture.id}`}>
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

export default LectureTable;

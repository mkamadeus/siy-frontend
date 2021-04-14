import { Link } from '@reach/router';
import React from 'react';
import { EyeOutline } from '@graywolfai/react-heroicons';
import { useQuery } from 'react-query';
import { Lecture } from '~/model/Lecture';
import { getCourseById } from '~/api/Course';

interface Props {
  lectures: Lecture[];
}

interface ItemProps {
  lecture: Lecture;
  index: number;
}

const TeacherLectureTableItem: React.FunctionComponent<ItemProps> = ({
  lecture,
  index,
}: ItemProps) => {
  const { data: course, isLoading } = useQuery(
    ['course', lecture.courseId],
    () => getCourseById(lecture.courseId)
  );

  if (isLoading) return null;

  return (
    <tr className="border-b border-gray-400" key={`course-${index}`}>
      <td className="p-1 text-center">{lecture.id}</td>
      <td className="p-1">{course?.name}</td>
      <td className="p-1">{lecture.year}</td>
      <td className="p-1">{lecture.semester}</td>
      <td className="p-1 text-center flex justify-center space-x-3">
        <Link to={`/teacher/lecture/${lecture.id}`}>
          <EyeOutline className="h-5 w-5 text-gray-500" />
        </Link>
      </td>
    </tr>
  );
};

const TeacherLectureTable: React.FunctionComponent<Props> = ({
  lectures,
}: Props) => {
  if (lectures.length === 0) {
    return (
      <div className="text-center italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1">ID</th>
          <th className="p-1 text-left">Mata Kuliah</th>
          <th className="p-1">Tahun</th>
          <th className="p-1">Semester</th>
          <th className="p-1">Action</th>
        </tr>
      </thead>
      <tbody>
        {lectures.map((lecture, index) => (
          <TeacherLectureTableItem
            key={`table-item-${index}`}
            lecture={lecture}
            index={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TeacherLectureTable;

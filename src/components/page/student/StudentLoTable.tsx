// TODO: Display LO

import React from 'react';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import { getLectureById } from '~/api/Lecture';
import { StudentGrade } from '~/model/Grade';

interface Props {
  grades: StudentGrade[];
}

interface ItemProps {
  grade: StudentGrade;
  index: number;
}

const StudentLoTableItem: React.FunctionComponent<ItemProps> = ({
  grade,
  index,
}: ItemProps) => {
  const lectureId = grade.lectureId;
  const { data: lecture, isLoading: isLectureLoading } = useQuery(
    ['lecture', lectureId],
    () => getLectureById(lectureId)
  );
  const courseId = lecture?.courseId as number;
  const { data: course, isLoading: isCourseLoading } = useQuery(
    ['course', courseId],
    () => getCourseById(courseId)
  );

  if (!course || isCourseLoading) return null;
  if (!lecture || isLectureLoading) return null;

  return (
    <tr className="border-b border-gray-400" key={`course-${index}`}>
      <td className="p-1 text-center">{index}</td>
      <td className="p-1 text-center">{course.code}</td>
      <td className="p-1 text-left">{course.name}</td>
      <td className="p-1 text-center">{grade.toString()}</td>
      <td className="p-1 text-center">{grade.index}</td>
    </tr>
  );
};

const StudentLoTable: React.FunctionComponent<Props> = ({ grades }: Props) => {
  if (grades.length === 0) {
    return (
      <div className="text-center italic w-full text-gray-700">
        There is no data!
      </div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1 text-center w-1/10">No</th>
          <th className="p-1 text-center w-1/10">Kode</th>
          <th className="p-1 text-left w-6/10">Nama</th>
          <th className="p-1 text-center w-1/10">LO A</th>
          <th className="p-1 text-center w-1/10">LO B</th>
          <th className="p-1 text-center w-1/10">LO C</th>
          <th className="p-1 text-center w-1/10">LO D</th>
          <th className="p-1 text-center w-1/10">LO E</th>
          <th className="p-1 text-center w-1/10">LO F</th>
          <th className="p-1 text-center w-1/10">LO G</th>
        </tr>
      </thead>
      <tbody>
        {grades.map((grade, index) => (
          <StudentLoTableItem
            key={`table-item-${index}`}
            grade={grade}
            index={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StudentLoTable;

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

const StudentGradeTableItem: React.FunctionComponent<ItemProps> = ({
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
      <td className="p-1">{course.code}</td>
      <td className="p-1">{course.name}</td>
      <td className="p-1">{grade.index}</td>
    </tr>
  );
};

const StudentGradeTable: React.FunctionComponent<Props> = ({
  grades,
}: Props) => {
  if (grades.length === 0) {
    return (
      <div className="text-center italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1">No</th>
          <th className="p-1 text-left">Kode</th>
          <th className="p-1">Nama</th>
          <th className="p-1">Indeks</th>
        </tr>
      </thead>
      <tbody>
        {grades.map((grade, index) => (
          <StudentGradeTableItem
            key={`table-item-${index}`}
            grade={grade}
            index={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StudentGradeTable;

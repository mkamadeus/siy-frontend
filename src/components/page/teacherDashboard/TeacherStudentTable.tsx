import React from 'react';
import { useQuery } from 'react-query';
import { Student } from '~/model/Student';
import { getGradesByNim } from '~/api/Grade';

interface Props {
  students: Student[];
  lectureId: number;
}

interface ItemProps {
  student: Student;
  courseId: number;
  index: number;
}

const TeacherStudentTableItem: React.FunctionComponent<ItemProps> = ({
  student,
  index,
  courseId,
}: ItemProps) => {
  const { data: grade, isLoading: isGradeLoading } = useQuery(
    ['grade', student.nim],
    () => getGradesByNim(student.nim)
  );

  if (!grade || isGradeLoading) return null;

  return (
    <tr className="border-b border-gray-400" key={`course-${index}`}>
      <td className="p-1 text-center">{student.id}</td>
      <td className="p-1">{student.nim}</td>
      <td className="p-1">{student.name}</td>
      <td className="p-1">{grade.filter((g) => g.courseId == courseId)[0]}</td>
    </tr>
  );
};

const TeacherStudentTable: React.FunctionComponent<Props> = ({
  students,
  lectureId: courseId,
}: Props) => {
  if (students.length === 0) {
    return (
      <div className="text-center italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1">ID</th>
          <th className="p-1 text-left">NIM</th>
          <th className="p-1">Nama</th>
          <th className="p-1">Nilai</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <TeacherStudentTableItem
            key={`table-item-${index}`}
            student={student}
            index={index}
            courseId={courseId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TeacherStudentTable;

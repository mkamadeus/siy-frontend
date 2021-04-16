import React from 'react';
import { useQuery } from 'react-query';
import { Student } from '~/model/Student';
import { getLectureById } from '~/api/Lecture';
import { getGradesByNim } from '~/api/Grade';

interface Props {
  students: Student[];
  lectureId: number;
}

interface ItemProps {
  student: Student;
  lectureId: number;
  index: number;
}

const TeacherStudentTableItem: React.FunctionComponent<ItemProps> = ({
  student,
  index,
  lectureId,
}: ItemProps) => {
  const { data: lecture, isLoading: isLectureLoading } = useQuery(
    ['lecture', lectureId],
    () => getLectureById(lectureId)
  );
  const { data: grades, isLoading: isGradeLoading } = useQuery(
    ['grades', student.nim],
    () => getGradesByNim(student.nim)
  );

  if (!lecture || isLectureLoading) return null;
  if (!grades || isGradeLoading) return null;

  const getIndex = () => {
    const res = grades.find((g) => {
      return g.lectureId == lectureId && student.id == g.studentId;
    });
    return res ? res.index : '';
  };

  return (
    <tr className="border-b border-gray-400" key={`course-${index}`}>
      <td className="p-1 text-center">{student.id}</td>
      <td className="p-1">{student.nim}</td>
      <td className="p-1">{student.name}</td>
      <td className="p-1 text-center">{getIndex()}</td>
    </tr>
  );
};

const TeacherStudentTable: React.FunctionComponent<Props> = ({
  students,
  lectureId,
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
            lectureId={lectureId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TeacherStudentTable;

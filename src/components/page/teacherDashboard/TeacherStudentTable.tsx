import React from 'react';
import { Student } from '~/model/Student';
import { LectureHistory } from '~/model/LectureHistory';
import { Grade } from '~/model/Grade';
import { PencilOutline } from '@graywolfai/react-heroicons';
import { Link } from '@reach/router';

interface Props {
  lectureHistories: LectureHistory[];
}

interface ItemProps {
  student: Student;
  grade: Grade;
  index: number;
  lectureId: number;
}

const TeacherStudentTableItem: React.FunctionComponent<ItemProps> = ({
  student,
  grade,
  index,
  lectureId,
}: ItemProps) => {
  return (
    <tr className="border-b border-gray-400" key={`course-${index}`}>
      <td className="p-1 text-center">{student.id}</td>
      <td className="p-1 text-center">{student.nim}</td>
      <td className="p-1 text-left">{student.name}</td>
      <td className="p-1 text-center">{grade.finalTest}</td>
      <td className="p-1 text-center">{grade.midTest}</td>
      <td className="p-1 text-center">{grade.quiz}</td>
      <td className="p-1 text-center">{grade.practicum}</td>
      <td className="p-1 text-center">{grade.homework}</td>
      <td className="p-1 text-center">{grade.grade}</td>
      <td className="p-1 text-center flex justify-center space-x-3">
        <Link
          to={`/teacher/lecture/${lectureId}/student/${student.id}/grade/${grade.id}/edit`}
        >
          <PencilOutline className="h-5 w-5 text-gray-500" />
        </Link>
      </td>
    </tr>
  );
};

const TeacherStudentTable: React.FunctionComponent<Props> = ({
  lectureHistories,
}: Props) => {
  if (lectureHistories.length === 0) {
    return (
      <div className="text-center italic text-gray-700">There is no data!</div>
    );
  }

  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1 text-center w-1/10">ID</th>
          <th className="p-1 text-center w-1/10">NIM</th>
          <th className="p-1 text-left w-6/10">Nama</th>
          <th className="p-1 text-center">UAS</th>
          <th className="p-1 text-center">UTS</th>
          <th className="p-1 text-center">Kuis</th>
          <th className="p-1 text-center">Praktikum</th>
          <th className="p-1 text-center">Tugas</th>
          <th className="p-1 text-center">Indeks</th>
          <th className="p-1 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {lectureHistories.map((lectureHistory, index) => (
          <TeacherStudentTableItem
            key={`table-item-${index}`}
            student={lectureHistory.student}
            grade={lectureHistory.grade}
            index={index}
            lectureId={lectureHistory.lectureId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TeacherStudentTable;

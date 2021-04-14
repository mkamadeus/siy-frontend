import React from 'react';
// import { useQuery } from 'react-query';
// import { getGradesByNim } from '~/api/Grade';
import { StudentGrade } from '~/model/Grade';

interface Props {
  grades: StudentGrade[];
  lectureId: number;
}

// interface ItemProps {
//   student: StudentGrade;
//   lectureId: number;
//   index: number;
// }

// const TranscriptTableItem: React.FunctionComponent<ItemProps> = ({
//   student,
//   index,
//   lectureId,
// }: ItemProps) => {
//   const { data: grade, isLoading: isGradeLoading } = useQuery(
//     ['grade', student.nim],
//     () => getGradesByNim(student.nim)
//   );

//   if (!grade || isGradeLoading) return null;

//   return (
//     <tr className="border-b border-gray-400" key={`course-${index}`}>
//       <td className="p-1 text-center">{student.id}</td>
//       <td className="p-1">{student.nim}</td>
//       <td className="p-1">{student.name}</td>
//       <td className="p-1">{grade.filter((g) => g.courseId == courseId)[0]}</td>
//     </tr>
//   );
// };

const TranscriptTable: React.FunctionComponent<Props> = ({ grades }: Props) => {
  // if (students.length === 0) {
  //   return (
  //     <div className="text-center italic text-gray-700">There is no data!</div>
  //   );
  // }

  // return (
  //   <table className="table-auto w-full text-xs">
  //     <thead>
  //       <tr className="border-b border-gray-400 ">
  //         <th className="p-1">ID</th>
  //         <th className="p-1 text-left">NIM</th>
  //         <th className="p-1">Nama</th>
  //         <th className="p-1">Nilai</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {students.map((student, index) => (
  //         <TranscriptTableItem
  //           key={`table-item-${index}`}
  //           student={student}
  //           index={index}
  //           lectureId={lectureId}
  //         />
  //       ))}
  //     </tbody>
  //   </table>
  // );

  return null;
};

export default TranscriptTable;

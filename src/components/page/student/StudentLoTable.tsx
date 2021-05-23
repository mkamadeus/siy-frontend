import React from 'react';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import { getAuthenticatedLectureHistory } from '~/api/Session';
import { useAuth } from '~/hooks/useAuth';
import { StudentGrade } from '~/model/Grade';
import { Lecture } from '~/model/Lecture';

interface ItemProps {
  grade: StudentGrade;
  lecture: Lecture;
  index: number;
}

const StudentLoTableItem: React.FunctionComponent<ItemProps> = ({
  lecture,
  grade,
  index,
}: ItemProps) => {
  const courseId = lecture?.courseId as number;
  const { data: course, isLoading: isCourseLoading } = useQuery(
    ['course', courseId],
    () => getCourseById(courseId)
  );

  if (!course || isCourseLoading) return null;

  return (
    <tr className="border-b border-gray-400" key={`course-${index}`}>
      <td className="p-1 text-center">{index}</td>
      <td className="p-1 text-center">{course.code}</td>
      <td className="p-1 text-left">{course.name}</td>
      {grade.lo.map((lo, index) => {
        return (
          <td className="p-1 text-center" key={`lo-item-${index}`}>
            {lo}
          </td>
        );
      })}
    </tr>
  );
};

const StudentLoTable: React.FunctionComponent = () => {
  const { authState } = useAuth();

  const { data: lectureHistories, isLoading: isLoading } = useQuery(
    'lectureHistories',
    () => getAuthenticatedLectureHistory(authState.accessToken)
  );

  console.log(lectureHistories);

  if (isLoading || !lectureHistories) {
    return null;
  }

  if (lectureHistories.length === 0) {
    return (
      <div className="text-center italic w-full text-gray-300 text-sm">
        Tidak ada data.
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
        {lectureHistories.map(({ grade, lecture }, index) => (
          <StudentLoTableItem
            key={`table-item-${index}`}
            lecture={lecture}
            grade={grade}
            index={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StudentLoTable;

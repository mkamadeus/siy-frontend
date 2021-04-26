import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getStudentByNim } from '~/api/Student';
import { useQuery } from 'react-query';
import LoadingPage from '../common/LoadingPage';
import { getGradesByNim } from '~/api/Grade';

const StudentGradePage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { data: student, isLoading: isStudentLoading } = useQuery(
    ['students', '13518035'],
    () => getStudentByNim('13518035')
  );
  const { data: grades, isLoading: isGradesLoading } = useQuery(
    ['grades', '13518035'],
    () => getGradesByNim('13518035')
  );

  if (isStudentLoading || !student) return <LoadingPage />;
  if (isGradesLoading || !grades) return <LoadingPage />;

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-2">
        <div>
          <img
            src={student.imgPath}
            alt={`mahasiswa-${student.nim}`}
            className="h-16 w-16 object-cover shadow rounded-full"
          />
        </div>
        <div className="p-2">
          <div className="font-bold text-lg">{student.name}</div>
          <div className="text-sm italic">{student.nim}</div>
        </div>
      </div>
      <hr className="mb-4" />
    </div>
  );
};

export default StudentGradePage;

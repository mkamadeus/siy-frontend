import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';

import { AuthContext } from '~/context/AuthContext';
import StudentGradeTable from '~/components/page/student/StudentGradeTable';

const StudentGradePage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { student, grades } = useContext(AuthContext);

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
      <div>
        <StudentGradeTable grades={grades} />
      </div>
    </div>
  );
};

export default StudentGradePage;

import React from 'react';
import { RouteComponentProps } from '@reach/router';

import StudentGradeTable from '~/components/page/student/StudentGradeTable';
import { useAuth } from '~/hooks/useAuth';
import { Student } from '~/model/Student';

const StudentGradePage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { userData } = useAuth();
  const student = userData?.userData as Student;

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-2">
        <div>
          <img
            src={'https://github.com/identicons/mkamadeus.png'}
            className="w-12 h-12"
          />
        </div>
        <div className="p-2">
          <div className="font-bold text-lg">{student.name}</div>
          <div className="text-sm italic">{student.nim}</div>
        </div>
      </div>
      <hr className="mb-4" />
      <div>
        <StudentGradeTable />
      </div>
    </div>
  );
};

export default StudentGradePage;

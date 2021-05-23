import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAuth } from '~/hooks/useAuth';
import { Student } from '~/model/Student';
import StudentLoTable from '~/components/page/student/StudentLoTable';

const StudnetLoPage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { authState } = useAuth();
  const student = authState.userData?.userData as Student;

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-2xl mb-2">Transkrip LO</div>
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
        <StudentLoTable />
      </div>
    </div>
  );
};

export default StudnetLoPage;

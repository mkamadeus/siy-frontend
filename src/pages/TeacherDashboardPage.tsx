import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

const TeacherDashboardPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <div className="mt-10">
      <Link
        to="/teacher/class"
        className="box-content h-60 w-60 m-11 p-5 border-4"
      >
        Nilai
      </Link>
    </div>
  );
};

export default TeacherDashboardPage;

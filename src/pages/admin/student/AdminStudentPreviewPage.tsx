import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useQuery } from 'react-query';
import { getStudentById } from '~/api/Student';
import LoadingPage from '~/pages/common/LoadingPage';

type RouteProps = {
  id: number;
};

const AdminStudentPreviewPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {
  const studentId = props.id as number;
  const { data, isLoading, error } = useQuery(['Student', studentId], () => {
    return getStudentById(studentId);
  });

  if (error) {
    alert('error bang');
    return null;
  }

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Preview Student</div>
      <div className="flex flex-col space-y-3 text-sm">
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">NIM</div>
          <div className="w-3/4">{data.nim}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Nama</div>
          <div className="w-3/4">{data.name}</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AdminStudentPreviewPage;

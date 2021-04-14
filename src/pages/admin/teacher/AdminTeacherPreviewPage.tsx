import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useQuery } from 'react-query';
import { getTeacherById } from '~/api/Teacher';
import LoadingPage from '~/pages/common/LoadingPage';

type RouteProps = {
  id: number;
};

const AdminTeacherPreviewPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {
  const teacherId = props.id as number;
  const { data, isLoading, error } = useQuery(['teacher', teacherId], () => {
    return getTeacherById(teacherId);
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
      <div className="font-bold text-3xl mb-4">Preview Teacher</div>
      <div className="flex flex-col space-y-3 text-sm">
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Nama</div>
          <div className="w-3/4">{data.name}</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AdminTeacherPreviewPage;

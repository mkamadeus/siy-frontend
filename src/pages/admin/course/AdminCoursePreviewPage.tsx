import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import LoadingPage from '~/pages/common/LoadingPage';

type RouteProps = {
  id: number;
};

const AdminCoursePreviewPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {
  const { data, isLoading, error } = useQuery(['courses', props.id], () =>
    getCourseById(props.id!)
  );

  if (error) {
    alert('error bang');
    return null;
  }

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Preview Course</div>
      <div className="flex flex-col space-y-3">
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Kode</div>
          <div>{data.code}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Nama</div>
          <div>{data.name}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Silabus Ringkas</div>
          <div>{data.briefSyllabus}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Silabus Lengkap</div>
          <div>{data.completeSyllabus}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Luaran</div>
          <div>{data.outcome}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">SKS</div>
          <div>{data.credits}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminCoursePreviewPage;

import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import LoadingPage from '~/pages/common/LoadingPage';

type RouteProps = {
  id: number;
};

const AdminLecturePreviewPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {
  const { data, isLoading, error } = useQuery(['courses', props.id], () => {
    if (props.id) {
      return getCourseById(props.id);
    }
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
      <div className="font-bold text-3xl mb-4">Preview Lecture</div>
      <div className="flex flex-col space-y-3 text-sm">
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Kode</div>
          <div className="w-3/4">{data.code}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Nama</div>
          <div className="w-3/4">{data.name}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Silabus Ringkas</div>
          <div className="w-3/4">{data.briefSyllabus}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Silabus Lengkap</div>
          <div className="w-3/4">{data.briefSyllabus}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">Luaran</div>
          <div className="w-3/4">{data.outcome}</div>
        </div>
        <hr />
        <div className="flex items-start space-x-2">
          <div className="w-1/4 font-semibold">SKS</div>
          <div className="w-3/4">{data.credits}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLecturePreviewPage;

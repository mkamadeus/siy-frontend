import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getStudentData } from '~/api/Student';
import { useQuery } from 'react-query';
import LoadingPage from './common/LoadingPage';

const TranscriptPage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('userData', getStudentData);

  if (error) {
    alert(error);
  }

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-2">
        <div>
          <img
            src={data.imgPath}
            alt={`mahasiswa-${data?.nim}`}
            className="h-16 w-16 object-cover shadow rounded-full"
          />
        </div>
        <div className="p-2">
          <div className="font-bold text-lg">{data.name}</div>
          <div className="text-sm italic">{data.nim}</div>
        </div>
      </div>
      <hr className="mb-4" />
    </div>
  );
};

export default TranscriptPage;

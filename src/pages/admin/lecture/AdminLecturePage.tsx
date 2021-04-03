import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import LoadingPage from '~/pages/common/LoadingPage';
import LectureTable from '~/components/page/LectureTable';
import { getAllLectures } from '~/api/Lecture';

const AdminLecturePage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, isLoading } = useQuery('lectures', getAllLectures);

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-4 text-sm">
        <div className="flex justify-between mb-4">
          <div className="font-bold text-3xl">Lectures</div>
          <button
            className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            onClick={() => {
              navigate('/admin/course/create');
            }}
          >
            Create new lecture...
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <LectureTable lectures={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminLecturePage;

import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getStudentData } from '~/api/Student';
import { useQuery } from 'react-query';
import LazyLoadText from '~/components/LazyLoad';

const StudentPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('userData', getStudentData);

  if (error) {
    alert(error);
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <img src="hehe" alt="img-mahasiswa" />
          <div className="text-center text-xl font-bold">
            <LazyLoadText isLoading={isLoading} text={data?.name} />
          </div>
          <div className="text-center italic font-semibold">
            IPK/NR : <LazyLoadText isLoading={isLoading} text={data?.ipk} />
          </div>
        </div>
        <div className="flex w-full">
          <table className="table-auto w-full text-sm">
            <thead>
              <tr className="border border-gray-500 ">
                <th className="p-1">Kode</th>
                <th className="p-1">Nama</th>
                <th className="p-1">Indeks</th>
                <th className="p-1">Kehadiran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-500 ">
                <td className="p-1">IF3299</td>
                <td className="p-1">Pisang</td>
                <td className="p-1">AB</td>
                <td className="p-1">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;

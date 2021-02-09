import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getStudentData } from '~/api/Student';
import { useQuery } from 'react-query';
import LazyLoadText from '~/components/LazyLoadText';
import LazyLoadImage from '~/components/LazyLoadImage';

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
        <div className="flex flex-col mb-2 items-center">
          <LazyLoadImage
            isLoading={isLoading}
            path={data?.imgPath}
            alt={`mahasiswa-${data?.nim}`}
          />
          <div className="text-center text-xl font-bold">
            <LazyLoadText isLoading={isLoading} text={data?.name} />
          </div>
          <div className="text-center italic font-semibold">
            IPK/NR : <LazyLoadText isLoading={isLoading} text={data?.ipk} />
          </div>
        </div>
        <div className="flex w-full">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="border-b border-gray-400 ">
                <th className="p-1">Kode</th>
                <th className="p-1">Nama</th>
                <th className="p-1">Indeks</th>
              </tr>
            </thead>
            <tbody>
              {isLoading
                ? Array(5)
                    .fill(1)
                    .map((_, index) => {
                      return (
                        <tr
                          className="border-b border-gray-400"
                          key={`lazy-load-course-${index}`}
                        >
                          <td className="p-1 text-center">
                            <LazyLoadText isLoading={isLoading} fit />
                          </td>
                          <td className="p-1 text-center">
                            <LazyLoadText isLoading={isLoading} fit />
                          </td>
                          <td className="p-1 text-center">
                            <LazyLoadText isLoading={isLoading} fit />
                          </td>
                        </tr>
                      );
                    })
                : data?.courses.map(({ code, name, grade }, index) => {
                    return (
                      <tr
                        className="border-b border-gray-400"
                        key={`course-${index}`}
                      >
                        <td className="p-1 text-center">{code}</td>
                        <td className="p-1">{name}</td>
                        <td className="p-1 text-center">{grade || 'N/A'}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;

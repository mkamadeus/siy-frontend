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
        <div className="flex w-full mb-4">
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
        <div className="flex flex-col mb-4">
          <div className="font-bold text-xl text-center">LO Anda:</div>
          <div className="text-center text-lg font-semibold">
            <LazyLoadText isLoading={isLoading} text={data?.loAverage} />
          </div>
          <hr />
          <div className="flex flex-wrap justify-center">
            {isLoading
              ? Array(5)
                  .fill(1)
                  .map((_, index) => {
                    return (
                      <div
                        key={`lazy-load-lo-${index}`}
                        className="flex flex-col items-center w-20"
                      >
                        <div className="text-center w-full">
                          <LazyLoadText
                            isLoading={isLoading}
                            text={'sad'}
                            fit
                          />
                        </div>
                        <div className="text-center w-full">
                          <LazyLoadText
                            isLoading={isLoading}
                            text={'sad'}
                            fit
                          />
                        </div>
                      </div>
                    );
                  })
              : data?.lo
                  .sort((x, y) => {
                    if (x > y) return 1;
                    if (x < y) return -1;
                    return 0;
                  })
                  .map(({ loId, loScore }, index) => {
                    return (
                      <div
                        className="flex flex-col items-center w-20 p-2"
                        key={`lo-${index}`}
                      >
                        <div className="font-semibold text-sm">
                          {loId.toUpperCase()}
                        </div>
                        <div className="font-bold">
                          {loScore?.toPrecision(3)}
                        </div>
                      </div>
                    );
                  })}
          </div>
          <hr />
        </div>
        <div className="flex">
          <div className="text-blue-400 underline text-sm">
            Lihat transkrip lengkap..
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;

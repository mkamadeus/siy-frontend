import React from 'react';
import { Course } from '~/model/Course';
import LazyLoadText from '../LazyLoadText';

interface Props {
  isLoading: boolean;
  courses: Course[];
}

const TranscriptTable: React.FC<Props> = ({ isLoading, courses }: Props) => {
  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <tr className="border-b border-gray-400 ">
          <th className="p-1">Kode</th>
          <th className="p-1">Mata Kuliah</th>
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
          : courses.map(({ code, name, grade }, index) => {
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
  );
};

export default TranscriptTable;

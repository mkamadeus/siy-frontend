import React from 'react';
import { StudentGrade } from '~/model/Grade';
import LazyLoadText from '../LazyLoadText';

interface Props {
  isLoading: boolean;
  studentGrades: StudentGrade[];
}

const TranscriptTable: React.FC<Props> = ({
  isLoading,
  studentGrades: courses,
}: Props) => {
  return (
    <table className="table-auto w-full text-xs">
      <thead>
        <table className="text-left w-full">
      <thead className="bg-blue-900 flex text-white w-full">
        <tr className="flex w-full mb-4">
          <th className="p-4 w-1/4">Kode</th>
          <th className="p-4 w-1/4">Mata Kuliah</th>
          <th className="p-4 w-1/4">SKS</th>
          <th className="p-4 w-1/4">Indeks</th>
        </tr>
      </thead>
      <tbody className="bg-grey-light flex flex-col items-center justify-between w-full" style={{height: '10vh'}}>
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
                    <td className="p-1">
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
          : courses.map(({ course, indeks }, index) => {
              return (
                <tr
                  className="flex w-full mb-4"
                  key={`course-${index}`}
                >
                  <td className="p-4 w-1/4">{course.code}</td>
                  <td className="p-4 w-1/4">{course.name}</td>
                  <td className="p-4 w-1/4">{course.credits}</td>
                  <td className="p-4 w-1/4">{indeks || 'N/A'}</td>
                </tr>
              );
            })}
      </tbody>
      </table>
      
        {/* <tr className="border-b border-gray-400 ">
          <th className="p-1">Kode</th>
          <th className="p-1 text-left">Mata Kuliah</th>
          <th className="p-1">SKS</th>
          <th className="p-1">Indeks</th>
        </tr> */}
      </thead>
      {/* <tbody>
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
                    <td className="p-1">
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
          : courses.map(({ course, indeks }, index) => {
              return (
                <tr
                  className="border-b border-gray-400"
                  key={`course-${index}`}
                >
                  <td className="p-1 text-center">{course.code}</td>
                  <td className="p-1">{course.name}</td>
                  <td className="p-1 text-center">{course.credits}</td>
                  <td className="p-1 text-center">{indeks || 'N/A'}</td>
                </tr>
              );
            })}
      </tbody> */}
    </table>
  );
};

export default TranscriptTable;

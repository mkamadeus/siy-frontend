import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from 'react-query';
import { getStudentData } from '~/api/Student';
import LoadingPage from './common/LoadingPage';
import LazyLoadText from '~/components/LazyLoadText';

const LoDetailPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { data, error, isLoading } = useQuery('userData', getStudentData);

  if (error) {
    alert(error);
  }

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  const items = [];
  const grades = data.studentGrades;
  const maxYear = grades.reduce((max, b) => (b.year > max.year ? b : max)).year;
  const minYear = grades.reduce((min, b) => (b.year < min.year ? b : min)).year;
  for (let curYear = minYear; curYear <= maxYear; curYear++) {
    for (let curSemester = 1; curSemester <= 2; curSemester++) {
      items.push(
        <div className="mb-1 text-md-bold font-weight-bold">
          Semester {curSemester} Tahun {curYear}/{curYear + 1}
        </div>
      );
      const shownGrade = grades.filter((grade) => {
        return grade.year == curYear && grade.semester == curSemester;
      });
      if (shownGrade.length > 0) {
        items.push(
          <div>
            <hr />
            <table className="table-auto w-full text-sm mb-5">
              <thead>
                <tr className="border-b border-gray-400 ">
                  <th className="p-1 text-left">Kode</th>
                  <th className="p-1 text-left">Mata Kuliah</th>
                  <th className="p-1">LO A</th>
                  <th className="p-1">LO B</th>
                  <th className="p-1">LO C</th>
                  <th className="p-1">LO D</th>
                  <th className="p-1">LO E</th>
                  <th className="p-1">LO F</th>
                  <th className="p-1">LO G</th>
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
                            key={`lazy-load-${curYear}-${curSemester}-course-${index}`}
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
                            <td className="p-1 text-center">
                              <LazyLoadText isLoading={isLoading} fit />
                            </td>
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
                  : shownGrade.map(
                      (
                        { course, loA, loB, loC, loD, loE, loF, loG },
                        index
                      ) => {
                        return (
                          <tr
                            className="border-b border-gray-400"
                            key={`${curYear}-${curSemester}-course-${index}`}
                          >
                            <td className="p-1">{course.code}</td>
                            <td className="p-1">{course.name}</td>
                            <td className="p-1 text-center">{loA.loScore}</td>
                            <td className="p-1 text-center">{loB.loScore}</td>
                            <td className="p-1 text-center">{loC.loScore}</td>
                            <td className="p-1 text-center">{loD.loScore}</td>
                            <td className="p-1 text-center">{loE.loScore}</td>
                            <td className="p-1 text-center">{loF.loScore}</td>
                            <td className="p-1 text-center">{loG.loScore}</td>
                          </tr>
                        );
                      }
                    )}
              </tbody>
            </table>
          </div>
        );
      } else {
        items.push(<div>Tidak ada nilai LO.</div>);
      }
    }
  }

  return (
    <div>
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
      <div className="container mx-auto p-6">
        {items}
        {console.log('items', items)}
      </div>
    </div>
  );
};

export default LoDetailPage;

import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getStudentByNim } from '~/api/Student';
import { useQuery } from 'react-query';
import LoadingPage from '../common/LoadingPage';
import QuickTileButton from '~/components/common/QuickTileButton';
import { MenuSolid } from '@graywolfai/react-heroicons';
import { getGradesByNim } from '~/api/Grade';
import StudentGradeTable from '~/components/page/student/StudentGradeTable';

const StudentIndexPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { data: student, isLoading: isStudentLoading } = useQuery(
    ['students', '13518035'],
    () => getStudentByNim('13518035')
  );
  const { data: grades, isLoading: isGradesLoading } = useQuery(
    ['grades', '13518035'],
    () => getGradesByNim('13518035')
  );

  if (isStudentLoading || !student) return <LoadingPage />;
  if (isGradesLoading || !grades) return <LoadingPage />;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-2 items-center">
          <img
            src={student.imgPath}
            className="w-32 h-32 rounded-full shadow-md"
          />
          <div className="text-center text-xl font-bold">{student.name}</div>
          <div className="text-center italic font-semibold">
            IPK/NR : {student.ipk}
          </div>
        </div>
        <div className="flex w-full mb-4">
          <StudentGradeTable grades={grades} />
        </div>
        <div className="flex flex-col mb-4">
          <div className="font-bold text-xl text-center mb-2">LO Anda:</div>
          <hr />
          {/* <div className="flex flex-wrap justify-center">
            {student.lo
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
                    <div className="font-bold">{loScore?.toPrecision(3)}</div>
                  </div>
                );
              })}
          </div> */}
          <hr />
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mb-2">Navigasi</div>
        <div className="flex flex-wrap justify-center">
          <div className="p-1.5">
            <QuickTileButton
              to={'/student/transcript'}
              icon={<MenuSolid />}
              title="Transkrip Nilai"
            />
          </div>
          <div className="p-1.5">
            <QuickTileButton
              to={'/student/lo'}
              icon={<MenuSolid />}
              title="Transkrip LO"
            />
          </div>
          <div className="p-1.5">
            {/* TODO: form list */}
            <QuickTileButton
              to={'/student/lo'}
              icon={<MenuSolid />}
              title="Daftar Form"
            />
          </div>
          <div className="p-1.5">
            <QuickTileButton
              to={'/student/'}
              icon={<MenuSolid />}
              title="Daftar Form"
            />
          </div>
          <div className="p-1.5">
            <QuickTileButton
              to={'/student/'}
              icon={<MenuSolid />}
              title="Daftar Form"
            />
          </div>
          <div className="p-1.5">
            <QuickTileButton
              to={'/student/'}
              icon={<MenuSolid />}
              title="Daftar Form"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentIndexPage;

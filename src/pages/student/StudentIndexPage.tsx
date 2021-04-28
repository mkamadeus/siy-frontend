import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import QuickTileButton from '~/components/common/QuickTileButton';
import { AcademicCapSolid, MenuSolid } from '@graywolfai/react-heroicons';
import StudentGradeTable from '~/components/page/student/StudentGradeTable';

import { AuthContext } from '~/context/AuthContext';

const StudentIndexPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { student, grades } = useContext(AuthContext);

  // console.log(student, grades);

  const gradeThisSemester = grades.filter((grade) => {
    // const today = new Date();

    // TODO: fix based on current time
    return grade.year == 2020 && grade.semester == 2;
  });

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-2 items-center">
          <img
            src={student.imgPath}
            className="w-32 h-32 rounded-full shadow-md"
          />
          <div className="text-center text-xl font-bold">{student.name}</div>
          <div className="flex space-x-2 items-center text-center italic font-semibold">
            <div className="w-6 h-6 text-blue-500">
              <AcademicCapSolid />
            </div>
            <div>IPK/NR : {student.ipk || 'N/A'}</div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-4">
          <div className="font-bold text-2xl mb-2">Nilai</div>
          <StudentGradeTable grades={gradeThisSemester} />
        </div>
        <div className="flex flex-col mb-4">
          <div className="font-bold text-2xl mb-2">Luaran Pembelajaran</div>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-400 shadow m-1">
              <div className="font-semibold text-sm">LO A</div>
              <div className="font-bold">{student.loA.toPrecision(3)}</div>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-400 shadow m-1">
              <div className="font-semibold text-sm">LO B</div>
              <div className="font-bold">{student.loB.toPrecision(3)}</div>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-400 shadow m-1">
              <div className="font-semibold text-sm">LO C</div>
              <div className="font-bold">{student.loC.toPrecision(3)}</div>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-400 shadow m-1">
              <div className="font-semibold text-sm">LO D</div>
              <div className="font-bold">{student.loD.toPrecision(3)}</div>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-400 shadow m-1">
              <div className="font-semibold text-sm">LO E</div>
              <div className="font-bold">{student.loE.toPrecision(3)}</div>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-400 shadow m-1">
              <div className="font-semibold text-sm">LO F</div>
              <div className="font-bold">{student.loF.toPrecision(3)}</div>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-400 shadow m-1">
              <div className="font-semibold text-sm">LO G</div>
              <div className="font-bold">{student.loG.toPrecision(3)}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mb-2">Navigasi</div>
        <div className="flex flex-wrap justify-center -m-1.5">
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
              to={'/questionnaire'}
              icon={<MenuSolid />}
              title="Kuesioner Evaluasi"
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

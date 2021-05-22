import React from 'react';
import { RouteComponentProps } from '@reach/router';
import QuickTileButton from '~/components/common/QuickTileButton';
import {
  AcademicCapOutline,
  AcademicCapSolid,
  ClipboardListOutline,
  PresentationChartLineOutline,
  UserGroupOutline,
} from '@graywolfai/react-heroicons';
import StudentGradeTable from '~/components/page/student/StudentGradeTable';
import ITBBackground from '~/images/itbBackground.png';
import { Student } from '~/model/Student';
import { useAuth } from '~/hooks/useAuth';

const StudentIndexPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { userData } = useAuth();
  const student = userData?.userData as Student;

  return (
    <>
      <div className="flex flex-col mb-2 items-center relative bg-gradient-to-b from-blue-500 to to-blue-600 p-6">
        <div className="flex flex-col items-center z-10">
          <img
            src={'https://github.com/identicons/mkamadeus.png'}
            className="w-12 h-12"
          />
          <div className="text-center text-xl font-bold text-white">
            {student.name}
          </div>
          <div className="flex space-x-2 items-center text-center italic font-semibold">
            <div className="w-6 h-6 text-white">
              <AcademicCapSolid />
            </div>
            <div className="text-white">IPK/NR : {student.gpa}</div>
          </div>
        </div>
        <img className="absolute bottom-0 z-0" src={ITBBackground} />
      </div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full mb-4">
            <div className="font-bold text-2xl mb-2">Nilai</div>
            <StudentGradeTable />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <div className="font-bold text-2xl mb-2">Luaran Pembelajaran</div>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-300 shadow m-1">
                <div className="font-semibold text-sm">LO A</div>
                <div className="font-bold">{student.lok[0].toPrecision(3)}</div>
              </div>
              <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-300 shadow m-1">
                <div className="font-semibold text-sm">LO B</div>
                <div className="font-bold">{student.lok[0].toPrecision(3)}</div>
              </div>
              <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-300 shadow m-1">
                <div className="font-semibold text-sm">LO C</div>
                <div className="font-bold">{student.lok[0].toPrecision(3)}</div>
              </div>
              <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-300 shadow m-1">
                <div className="font-semibold text-sm">LO D</div>
                <div className="font-bold">{student.lok[0].toPrecision(3)}</div>
              </div>
              <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-300 shadow m-1">
                <div className="font-semibold text-sm">LO E</div>
                <div className="font-bold">{student.lok[0].toPrecision(3)}</div>
              </div>
              <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-300 shadow m-1">
                <div className="font-semibold text-sm">LO F</div>
                <div className="font-bold">{student.lok[0].toPrecision(3)}</div>
              </div>
              <div className="flex flex-col justify-center items-center w-20 h-20 p-2 rounded border border-gray-300 shadow m-1">
                <div className="font-semibold text-sm">LO G</div>
                <div className="font-bold">{student.lok[0].toPrecision(3)}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-2">Navigasi</div>
          <div className="flex flex-wrap justify-center md:justify-start -m-1.5 w-full">
            <div className="p-1.5">
              <QuickTileButton
                to={'/student/transcript'}
                icon={<PresentationChartLineOutline />}
                title="Transkrip Nilai"
              />
            </div>
            <div className="p-1.5">
              <QuickTileButton
                to={'/student/lo'}
                icon={<UserGroupOutline />}
                title="Transkrip LO"
              />
            </div>
            <div className="p-1.5">
              {/* TODO: form list */}
              <QuickTileButton
                to={'/peer-assessment-form'}
                icon={<ClipboardListOutline />}
                title="Peer Assessment"
              />
            </div>
            <div className="p-1.5">
              {/* TODO: form list */}
              <QuickTileButton
                to={'/student/join-class'}
                icon={<AcademicCapOutline />}
                title="Daftar Kelas"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentIndexPage;

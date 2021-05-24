import React, { useState } from 'react';

import { Link, navigate } from '@reach/router';
import {
  AcademicCapOutline,
  ClipboardListOutline,
  MenuAlt3Solid,
  PresentationChartLineOutline,
  StatusOnlineSolid,
  UserGroupOutline,
  UserSolid,
} from '@graywolfai/react-heroicons';
import { useAuth } from '~/hooks/useAuth';
import { Student } from '~/model/Student';
import { Teacher } from '~/model/Teacher';
import { Admin } from '~/model/Admin';
import { UserRole } from '~/model/User';

interface MenuProps {
  open: boolean;
  userData: Student | Teacher | Admin | null;
}

const navigationButtons = [
  {
    icon: <StatusOnlineSolid />,
    title: 'Dashboard',
    path: 'student',
    role: UserRole.STUDENT,
  },
  {
    icon: <PresentationChartLineOutline />,
    title: 'Transkrip Nilai',
    path: '/student/transcript',
    role: UserRole.STUDENT,
  },
  {
    icon: <UserGroupOutline />,
    title: 'Transkrip LO',
    path: '/student/lo',
    role: UserRole.STUDENT,
  },
  {
    icon: <ClipboardListOutline />,
    title: 'Peer Assessment',
    path: '/student/peer-assessment',
    role: UserRole.STUDENT,
  },
  {
    icon: <StatusOnlineSolid />,
    title: 'Daftar Kelas',
    path: '/student/join-class',
    role: UserRole.STUDENT,
  },
  {
    icon: <AcademicCapOutline />,
    title: 'Dashboard',
    path: 'teacher',
    role: UserRole.TEACHER,
  },
  {
    icon: <StatusOnlineSolid />,
    title: 'Dashboard',
    path: 'admin',
    role: UserRole.ADMIN
  },
  {
    icon: <AcademicCapOutline />,
    title: 'Course',
    path: '/admin/course',
    role: UserRole.ADMIN
  },
  {
    icon: <PresentationChartLineOutline />,
    title: 'Lecture',
    path: '/admin/lecture',
    role: UserRole.ADMIN
  }
];

const Menu = ({ open, userData }: MenuProps) => {
  const { authState, logout } = useAuth();

  console.log(authState);

  return (
    <div
      className={`${
        open ? 'flex' : 'hidden'
      } lg:flex flex-col lg:flex-row w-full lg:justify-end`}
    >
      <div className="flex flex-col lg:flex-row space-x-1">
        {navigationButtons
          .filter(
            (data) =>
              data.role === null || data.role === authState.userData?.role
          )
          .map(({ icon, title, path }) => {
            return (
              <Link
                key={`navbar-${title}`}
                className="flex items-center py-2 lg:py-0 lg:px-2.5 italic text-white text-sm transition duration-150 hover:bg-gray-700"
                to={path}
              >
                <div className="w-5 h-5 mr-2">{icon}</div>
                {title}
              </Link>
            );
          })}
      </div>
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center w-64">
          <div className="w-8 h-8 text-gray-200 bg-white rounded-full p-1">
            <UserSolid />
          </div>
          <div className="text-white text-xs p-2">
            <div className="text-xs font-semibold">Logged in as:</div>
            <div>{userData?.name}</div>
            <div>{(userData as Student).nim}</div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="flex w-full text-sm items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { authState } = useAuth();

  let homePath = '/';

  if (authState.userData?.role === UserRole.STUDENT) homePath = 'student';
  else if (authState.userData?.role === UserRole.TEACHER) homePath = 'teacher';


  return (
    <nav className="bg-gray-900 z-50 fixed w-full top-0">
      <div className="flex w-full p-4 flex-col lg:flex-row">
        <div className="flex w-full justify-between items-center">
          <div className="flex font-bold text-xl text-gray-100">
            <Link to={homePath}>SIY</Link>
          </div>
          <div
            className="w-8 h-8 lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MenuAlt3Solid className="text-white" />
          </div>
        </div>
        {!authState.isLoading && authState.isAuthenticated && (
          <Menu
            open={open}
            userData={authState.userData?.userData as Student | Teacher | null}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';

import { Link, navigate } from '@reach/router';
import {
  HomeSolid,
  MenuAlt3Solid,
  StatusOnlineSolid,
  UserSolid,
} from '@graywolfai/react-heroicons';
import { useAuth } from '~/hooks/useAuth';
import { Student } from '~/model/Student';
import { Teacher } from '~/model/Teacher';

interface MenuProps {
  open: boolean;
  userData: Student | Teacher | null;
}

const navigationButtons = [
  {
    icon: <HomeSolid />,
    title: 'Home',
    path: '/',
  },
  {
    icon: <StatusOnlineSolid />,
    title: 'Status',
    path: 'student',
  },
  {
    icon: <HomeSolid />,
    title: 'Teacher',
    path: 'teacher',
  },
  {
    icon: <HomeSolid />,
    title: 'Peer Assessment',
    path: 'peer-assessment-form',
  },
];

const Menu = ({ open, userData }: MenuProps) => {
  const { logout } = useAuth();

  return (
    <div className={`${open ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row`}>
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center">
          <div className="w-12 h-12 text-gray-200 bg-white rounded-full p-1">
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
            className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
      <div>
        {navigationButtons.map(({ icon, title, path }) => {
          return (
            <Link
              key={`navbar-${title}`}
              className="flex items-center py-2 lg:py-0 lg:px-2.5 w-max italic text-white"
              to={path}
            >
              <div className="w-5 h-5 mr-2">{icon}</div>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { authState } = useAuth();

  return (
    <nav className="bg-gray-900 z-50 fixed w-full top-0">
      <div className="flex w-full p-4 flex-col lg:flex-row">
        <div className="flex w-full justify-between items-center">
          <div className="flex font-bold text-xl text-gray-100">
            <Link to="/">SIY</Link>
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

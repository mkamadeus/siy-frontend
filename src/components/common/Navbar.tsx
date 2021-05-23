import React, { useState } from 'react';
import { Link } from '@reach/router';
import { MenuAlt3Solid } from '@graywolfai/react-heroicons';
import { useAuth } from '~/hooks/useAuth';

interface MenuProps {
  open: boolean;
}

const navigationButtons = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Status',
    path: 'student',
  },
  {
    title: 'Teacher',
    path: 'teacher',
  },
  {
    title: 'Peer Assessment',
    path: 'peer-assessment-form',
  },
];

const Menu = ({ open }: MenuProps) => {
  return (
    <div className={`${open ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row`}>
      {navigationButtons.map(({ title, path }) => {
        return (
          <div
            key={`navbar-${title}`}
            className="py-2 lg:py-0 lg:px-2.5 w-max italic text-white"
          >
            <Link to={path}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { authState } = useAuth();

  return (
    <nav className="bg-gray-900 z-50 fixed w-full top-0">
      <div className="flex w-full justify-between p-4 flex-col lg:flex-row">
        <div className="flex w-full justify-between">
          <div className="flex font-bold text-xl text-gray-100">
            <Link to="/">SIY</Link>
          </div>
          <div className="flex text-gray-100">
            {authState.isAuthenticated
              ? `Authenticated as ${authState.userData?.userData?.name}`
              : 'Not authenticated'}
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
        <Menu open={open}></Menu>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from '@reach/router';
import { MenuAlt3Solid } from '@graywolfai/react-heroicons';

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

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-900">
      <div className="flex w-full justify-between items-center p-4">
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
      <div
        className={`${open ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row`}
      >
        {navigationButtons.map(({ title, path }) => {
          return (
            <div key={`navbar-${title}`} className="p-2.5 italic text-white">
              <Link to={path}>{title}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from '@reach/router';

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
  return (
    <nav className="flex w-full p-4 justify-between items-center bg-gray-900">
      <div className="flex font-bold text-xl text-gray-100">
        <Link to="/">SIY</Link>
      </div>
      <div className="flex">
        {navigationButtons.map(({ title, path }) => {
          return (
            <div key={`navbar-${title}`} className="p-2 italic text-gray-100">
              <Link to={path}>{title}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

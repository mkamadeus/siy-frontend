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
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full p-4 justify-between items-center">
      <div className="flex">Ini logo</div>
      <div className="flex">
        {navigationButtons.map(({ title, path }) => {
          return (
            <div
              key={`navbar-${title}`}
              className="p-2 underline text-blue-400"
            >
              <Link to={path}>{title}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

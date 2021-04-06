import React from 'react';
import { RouteComponentProps } from '@reach/router';

const adminCards = [
  {
    title: 'Course',
    path: '/admin/course',
  },
  {
    title: 'Lecture',
    path: '/admin/lecture',
  },
];

const AdminIndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  return (
    <div className="container mx-auto p-6">
      <div className="font-bold text-3xl mb-4">Admin Dashboard</div>
      <div className="flex">
        {adminCards.map(({ title, path }) => {
          return (
            <div
              className="flex rounded shadow border border-gray-500"
              key={`card-${title}`}
            >
              <div>{title}</div>
              <div>{path}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminIndexPage;

import React from 'react';
import { RouteComponentProps } from '@reach/router';

const StudentPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex">
          <img src="hehe" alt="img-mahasiswa" />
          <div className="text-xl font-bold">mek</div>
        </div>
        <div className="flex">
          <table>
            <thead>
              <tr>
                <th>asd</th>
                <th>asd</th>
                <th>asd</th>
                <th>asd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;

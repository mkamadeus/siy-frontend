import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getCourseData } from '~/api/Teacher';
import LoadingPage from './LoadingPage';
import { useState } from 'react';
import { useQuery } from 'react-query';


const AdminPageTeacher: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
    const { data, error, isLoading } = useQuery('userData', getCourseData);
    const [ dataA, setDataA] = useState({ hits: [] });

    if (error) {
        alert(error);
    }

    if (isLoading || !data) {
        return <LoadingPage />;
    }
    return (
        <div className="container mx-auto p-6">
        <div>Teacher Admin Page</div>
        <ul>
            {dataA.hits.map(Teacher => (
                <li key={Teacher.id}>
                    <a>{ Teacher.name }</a>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default AdminPageTeacher;

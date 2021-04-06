import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { getStudentData } from '~/api/Student';
import LoadingPage from './LoadingPage';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Student } from '~/model/Student';

const AdminPageStudent: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
    const { data, error, isLoading } = useQuery('userData', getStudentData);

    if (error) {
        alert(error);
    }

    if (isLoading || !data) {
        return <LoadingPage />;
    }
    return (
        <div className="container mx-auto p-6">
        <div>Student Admin Page</div>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
            <div>
                    {data.map((Student) => (
                        <p key={Student.id}>{Student.id}, {Student.name}, {Student.nim}, {Student.ipk}</p>
                    ))}
            </div>
            )}
        </div>
    );
};

export default AdminPageStudent;

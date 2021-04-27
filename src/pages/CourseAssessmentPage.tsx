import React from 'react';
import { BasicTable } from './BasicTable';
import { RouteComponentProps } from '@reach/router';
import { LOTable } from './LOTable';

const CourseAssessmentPage: React.FC<RouteComponentProps> = (
    _props: RouteComponentProps
) => {
    return(
      <div className='courseAssessmentTable'>
        <BasicTable />
        <LOTable />
      </div>
    );
  };

export default CourseAssessmentPage;
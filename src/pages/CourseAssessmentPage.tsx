import React from 'react';
import { BasicTable } from './BasicTable';
import { RouteComponentProps } from '@reach/router';

const CourseAssessmentPage: React.FC<RouteComponentProps> = (
    _props: RouteComponentProps
) => {
    return(
      <div className='courseAssessmentTable'>
        <BasicTable />
      </div>
    );
  };

export default CourseAssessmentPage;
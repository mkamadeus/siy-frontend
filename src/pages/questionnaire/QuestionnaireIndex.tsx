import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAuth } from '~/hooks/useAuth';
import { Student } from '~/model/Student';
import QuestionnaireIndexTable from '~/components/page/questionnaire/questionnaireIndexTable';
import LoadingPage from '../common/LoadingPage';
import { useQuery } from 'react-query';
import { getAuthenticatedLectureHistory } from '~/api/Session';

const QuestionnaireIndexPage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  const { authState } = useAuth();
  const student = authState.userData?.userData as Student;

  const { data, isLoading } = useQuery('grades', () =>
    getAuthenticatedLectureHistory(authState.accessToken)
  );

  if (!data || isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-2">
        <div className="p-2">
          <div className="font-bold text-lg">{student.name}</div>
          <div className="text-sm italic">{student.nim}</div>
        </div>
      </div>
      <hr className="mb-4" />
      <div>
        <QuestionnaireIndexTable lectureHistory={data} />
      </div>
    </div>
  );
};

export default QuestionnaireIndexPage;

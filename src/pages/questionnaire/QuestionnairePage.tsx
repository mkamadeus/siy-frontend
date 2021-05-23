import React from 'react';
import { RouteComponentProps } from '@reach/router';


import { useQuery } from 'react-query';
import LoadingPage from '../common/LoadingPage';
import QuestionnaireTable from '~/components/page/questionnaire/questionnaireTable'
import { getLectureById } from '~/api/Lecture';

type RouteProps = {
  lId: number;
  gId: number;
}

const QuestionnairePage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps<RouteProps>
) => {

 // const {student} = useContext(AuthContext)

const {data:lecture, isLoading, error} = useQuery(
  ['lecture', props.lId],
  () => { if (props.lId) return getLectureById(props.lId);
  }
)

  if (error) {
    alert('error bang');
    return null;
  }

  if (isLoading || !lecture) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto p-6">
      <div>
        <QuestionnaireTable lecture={lecture} /**grade={grades[0]}*/></QuestionnaireTable>
      </div>
    </div>
  );
};

export default QuestionnairePage;

import React from 'react';
import { RouteComponentProps } from '@reach/router';

// import QuestionnaireIndexTable from '~/components/page/questionnaire/questionnaireIndexTable';

const QuestionnaireIndexPage: React.FC<RouteComponentProps> = (
  _: RouteComponentProps
) => {
  // const {student, grades} = useContext(AuthContext);

  return null;
  // return (
  //   <div className="container mx-auto p-6">
  //     <div className="flex items-center mb-2">
  //       <div className="p-2">
  //         <div className="font-bold text-lg">{student.name}</div>
  //         <div className="text-sm italic">{student.nim}</div>
  //       </div>
  //     </div>
  //     <hr className="mb-4" />
  //     <div>
  //       <QuestionnaireIndexTable grades={grades} />
  //     </div>
  //   </div>
  // );
};

export default QuestionnaireIndexPage;

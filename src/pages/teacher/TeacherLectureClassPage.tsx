import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import { getCourseAssessmentByLectureId, getLectureById } from '~/api/Lecture';
import { getStudentByLectureId } from '~/api/LectureHistory';
import TeacherStudentTable from '~/components/page/teacherDashboard/TeacherStudentTable';
import LoadingPage from '../common/LoadingPage';

interface RouteProps {
  id: number;
}

const TeacherlectureClassPage: React.FC<RouteComponentProps<RouteProps>> = (
  props: RouteComponentProps<RouteProps>
) => {
  const lectureId = props.id as number;
  const { data: lecture, isLoading: isLectureloading } = useQuery(
    ['lecture', lectureId],
    () => getLectureById(lectureId)
  );

  const { data: course, isLoading: isCourseLoading } = useQuery(
    ['course-lecture', lectureId],
    () => {
      return getLectureById(lectureId).then((lecture) =>
        getCourseById(lecture.courseId)
      );
    }
  );

  const { data: lectureHistory, isLoading: isLectureHistoryLoading } = useQuery(
    'lectureHistory',
    () => {
      return getStudentByLectureId(lectureId);
    }
  );

  const year = lecture? lecture.year : 0;
  const semester = lecture? lecture.semester : 0;
  const { data: cas, isLoading: isCALoading } = useQuery(
    ['course-assessment', year, semester],
    () => getCourseAssessmentByLectureId(year, semester)
  );

  if (!lecture || isLectureloading) return <LoadingPage />;
  if (!course || isCourseLoading) return <LoadingPage />;
  if (!lectureHistory || isLectureHistoryLoading) return <LoadingPage />;
  if (!cas || isCALoading) return <LoadingPage />;

  const ca = cas.find((ca) => {
    return ca.id == lectureId;
  });

  return (
    <div className="container mx-auto p-6" >
      <div className="flex flex-col w-full mb-4">
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-2xl font-bold">
              {course.code} {course.name}
            </div>

            <div className="text-gray-500 italic">
              Tahun {lecture.year}/{lecture.year + 1} Semester {lecture.semester}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-500">
              Course Assessment
            </div>
            <div className="flex flex-row font-bold justify-between">
              <div>{ca?.courseAssessment}</div> / <div>{ca?.mark}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <TeacherStudentTable lectureHistories={lectureHistory} />
      </div>
    </div>
  );
};

export default TeacherlectureClassPage;
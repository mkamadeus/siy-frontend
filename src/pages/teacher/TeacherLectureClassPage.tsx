import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useQuery } from 'react-query';
import { getCourseById } from '~/api/Course';
import { getLectureById } from '~/api/Lecture';
import { getStudentByLectureId } from '~/api/LectureHistory';
import TeacherStudentTable from '~/components/page/teacherDashboard/TeacherStudentTable';
import LoadingPage from '../common/LoadingPage';
import ITBBackground from '~/images/itbBackground.png';
import { getCourseAssessment } from '~/api/CourseAssment';

interface RouteProps {
  id: number;
}

const TeacherLectureClassPage: React.FC<RouteComponentProps<RouteProps>> = (
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

  const { data: ca, isLoading: isCALoading } = useQuery(
    'course-assessment',
    () => getCourseAssessment(lectureId)
  );

  if (!lecture || isLectureloading) return <LoadingPage />;
  if (!course || isCourseLoading) return <LoadingPage />;
  if (!lectureHistory || isLectureHistoryLoading) return <LoadingPage />;
  if (!ca || isCALoading) return <LoadingPage />;

  return (
    <>
      <div className="flex flex-row justify-between mb-4 items-center relative bg-gradient-to-b from-blue-500 to to-blue-600 p-6">
        <div className="z-10">
          <div className="text-2xl font-bold text-white">
            {course.code} {course.name}
          </div>
          <div className="text-gray-200 italic">
            Tahun {lecture.year}/{lecture.year + 1} Semester {lecture.semester}
          </div>
        </div>
        <div className="text-center z-10">
          <div className="text-gray-200">Course Assessment</div>
          <div className="flex flex-row justify-between space-x-2">
            <div className="font-bold text-white">
              {ca}
              {' / 4.00'}
            </div>
            <div
              className={`flex items-center px-1 rounded ${
                ca < 3.0 ? 'bg-red-500' : 'bg-green-500'
              } text-xs text-white`}
            >
              {ca < 3.0 ? 'Improve' : 'Maintain'}
            </div>
          </div>
        </div>
        <img className="absolute bottom-0 z-0" src={ITBBackground} />
      </div>
      <div className="container mx-auto p-6">
        <div className="font-bold text-2xl mb-2">Daftar Peserta Kelas</div>
        <div className="mb-4  overflow-x-auto">
          <TeacherStudentTable lectureHistories={lectureHistory} />
        </div>
      </div>
    </>
  );
};

export default TeacherLectureClassPage;

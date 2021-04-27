import React from 'react';
import { Router } from '@reach/router';
import { QueryClient, QueryClientProvider } from 'react-query';

import IndexPage from '~/pages/IndexPage';
import StudentPage from '~/pages/StudentPage';
import NotFoundPage from './pages/common/NotFoundPage';
import TeacherPage from '~/pages/TeacherPage';
import Navbar from './components/Navbar';
import TranscriptPage from './pages/TranscriptPage';
import PeerAssesmentForm from './pages/PeerAssesmentForm';
// import AdminCoursePage from './pages/admin/course/AdminCoursePage';
import AdminCourseCreatePage from './pages/admin/course/AdminCourseCreatePage';
import AdminIndexPage from './pages/admin/AdminIndexPage';
import AdminCourseEditPage from './pages/admin/course/AdminCourseEditPage';
import LoDetailPage from './pages/LoDetailPage';
import AdminLecturePage from './pages/admin/lecture/AdminLecturePage';
import AdminLectureCreatePage from './pages/admin/lecture/AdminLectureCreatePage';
import AdminLectureEditPage from './pages/admin/lecture/AdminLectureEditPage';
import AdminLecturePreviewPage from './pages/admin/lecture/AdminLecturePreviewPage';
import AdminCoursePreviewPage from './pages/admin/course/AdminCoursePreviewPage';
import LoginPage from './pages/LoginPage';
import AdminTeacherPage from './pages/admin/teacher/AdminTeacherPage';
import AdminTeacherCreatePage from './pages/admin/teacher/AdminTeacherCreatePage';
import AdminTeacherEditPage from './pages/admin/teacher/AdminTeacherEditPage';
import AdminTeacherPreviewPage from './pages/admin/teacher/AdminTeacherPreviewPage';
import AdminStudentPage from './pages/admin/student/AdminStudentPage';
import AdminStudentCreatePage from './pages/admin/student/AdminStudentCreatePage';
import AdminStudentEditPage from './pages/admin/student/AdminStudentEditPage';
import AdminStudentPreviewPage from './pages/admin/student/AdminStudentPreviewPage';
import CourseAssessmentPage from './pages/CourseAssessmentPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router basepath="/">
        <NotFoundPage default />
        <IndexPage path="/" />
        <StudentPage path="/student" />
        <LoDetailPage path="/student/lo" />
        <TranscriptPage path="/student/transcript" />
        <TeacherPage path="/teacher" />
        <PeerAssesmentForm path="/peer-assessment-form" />
        <CourseAssessmentPage path="/course-assessment" />

        <AdminIndexPage path="/admin" />

        {/* ADMIN COURSE */}
        {/* TODO: <AdminCoursePage path="/admin/course" /> */}
        <AdminCoursePreviewPage path="/admin/course/:id" />
        <AdminCourseCreatePage path="/admin/course/create" />
        <AdminCourseEditPage path="/admin/course/edit/:id" />

        {/* ADMIN LECTURE */}
        <AdminLecturePage path="/admin/course" />
        <AdminLecturePreviewPage path="/admin/course/:id" />
        <AdminLectureEditPage path="/admin/course/edit/:id" />
        <AdminLectureCreatePage path="/admin/course/create" />

        {/* ADMIN STUDENT */}
        <AdminStudentPage path="/admin/student" />
        <AdminStudentPreviewPage path="/admin/student/:id" />
        <AdminStudentEditPage path="/admin/student/edit/:id" />
        <AdminStudentCreatePage path="/admin/student/create" />

        {/* ADMIN TEACHER */}
        <AdminTeacherPage path="/admin/teacher" />
        <AdminTeacherPreviewPage path="/admin/teacher/:id" />
        <AdminTeacherEditPage path="/admin/teacher/edit/:id" />
        <AdminTeacherCreatePage path="/admin/teacher/create" />

        {/* AUTH*/}
        <LoginPage path="/login" />
      </Router>
    </QueryClientProvider>
  );
};

export default App;

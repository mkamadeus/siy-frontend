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
      </Router>
    </QueryClientProvider>
  );
};

export default App;

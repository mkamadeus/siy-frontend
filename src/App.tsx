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
import LoDetailPage from './pages/LoDetailPage';
import AdminCoursePage from './pages/admin/course/AdminCoursePage';
import AdminCourseCreatePage from './pages/admin/course/AdminCourseCreatePage';
import AdminIndexPage from './pages/admin/AdminIndexPage';
import AdminCourseEditPage from './pages/admin/course/AdminCourseEditPage';
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
        <AdminCoursePage path="/admin/course" />
        <AdminCoursePreviewPage path="/admin/course/:id" />
        <AdminCourseCreatePage path="/admin/course/create" />
        <AdminCourseEditPage path="/admin/course/edit/:id" />
      </Router>
    </QueryClientProvider>
  );
};

export default App;

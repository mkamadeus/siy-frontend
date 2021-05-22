import React from 'react';
import { Router } from '@reach/router';
import { QueryClient, QueryClientProvider } from 'react-query';

import IndexPage from '~/pages/IndexPage';
import StudentIndexPage from '~/pages/student/StudentIndexPage';
import NotFoundPage from './pages/common/NotFoundPage';
import TeacherLecturePage from './pages/teacher/TeacherLecturePage';
import TeacherIndexPage from './pages/teacher/TeacherIndexPage';
import Navbar from './components/common/Navbar';
import StudentGradePage from './pages/student/StudentGradePage';
import StudentPeerAssessmentForm from './pages/student/StudentPeerAssessmentForm';
import AdminCourseCreatePage from './pages/admin/course/AdminCourseCreatePage';
import AdminIndexPage from './pages/admin/AdminIndexPage';
import AdminCourseEditPage from './pages/admin/course/AdminCourseEditPage';
import StudentLoPage from './pages/student/StudentLoPage';
import AdminLecturePage from './pages/admin/lecture/AdminLecturePage';
import AdminLectureCreatePage from './pages/admin/lecture/AdminLectureCreatePage';
import AdminLectureEditPage from './pages/admin/lecture/AdminLectureEditPage';
import AdminLecturePreviewPage from './pages/admin/lecture/AdminLecturePreviewPage';
import AdminCoursePreviewPage from './pages/admin/course/AdminCoursePreviewPage';
import Footer from './components/common/Footer';
import AdminCoursePage from './pages/admin/course/AdminCoursePage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/routes/PrivateRoute';
import { UserRole } from './model/User';
import StudentJoinClassPage from './pages/student/StudentJoinClassPage';
import TeacherlectureClassPage from './pages/teacher/TeacherLectureClassPage';
import TeacherLectureEditPage from './pages/teacher/TeacherLectureEditPage';
import TeacherGradeEditPage from './pages/teacher/TeacherGradePage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthContextProvider> */}
      <Navbar />
      <Router className="min-h-screen mt-16" basepath="/">
        <NotFoundPage default />
        <IndexPage path="/" />
        <PrivateRoute
          path="/student"
          component={StudentIndexPage}
          role={UserRole.STUDENT}
        />
        {/* <StudentIndexPage path="/student" /> */}
        <PrivateRoute
          path="/student/lo"
          component={StudentLoPage}
          role={UserRole.STUDENT}
        />
        <PrivateRoute
          path="/student/transcript"
          component={StudentGradePage}
          role={UserRole.STUDENT}
        />
        <PrivateRoute
          path="/student/peer-assessment"
          component={StudentPeerAssessmentForm}
          role={UserRole.STUDENT}
        />
        <PrivateRoute
          path="/student/join-class"
          component={StudentPeerAssessmentForm}
          role={UserRole.STUDENT}
        />

          {/* TEACHER */}
          <TeacherIndexPage path="/teacher" />
          <TeacherLecturePage path="/teacher/lecture/:id" />
          <TeacherlectureClassPage path="/teacher/lecture/:id/class" />
          <TeacherLectureEditPage path="/teacher/lecture/:id/edit" />
          <TeacherGradeEditPage path="/teacher/lecture/:lId/student/:sId/grade/:gId/edit" />

        <AdminIndexPage path="/admin" />

        {/* ADMIN COURSE */}
        <AdminCoursePage path="/admin/course" />
        <AdminCoursePreviewPage path="/admin/course/:id" />
        <AdminCourseCreatePage path="/admin/course/create" />
        <AdminCourseEditPage path="/admin/course/edit/:id" />

        {/* ADMIN LECTURE */}
        <AdminLecturePage path="/admin/lecture" />
        <AdminLecturePreviewPage path="/admin/lecture/:id" />
        <AdminLectureEditPage path="/admin/lecture/edit/:id" />
        <AdminLectureCreatePage path="/admin/lecture/create" />

        {/* AUTH*/}
        <RegisterPage path="/register" />
      </Router>
      <Footer />
      {/* </AuthContextProvider> */}
    </QueryClientProvider>
  );
};

export default App;

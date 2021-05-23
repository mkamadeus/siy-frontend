import React from 'react';
import { Router } from '@reach/router';
import { QueryClient, QueryClientProvider } from 'react-query';

import IndexPage from '~/pages/IndexPage';
import StudentIndexPage from '~/pages/student/StudentIndexPage';
import NotFoundPage from './pages/common/NotFoundPage';
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
import TeacherLectureEditPage from './pages/teacher/TeacherLectureEditPage';
import TeacherLectureClassPage from './pages/teacher/TeacherLectureClassPage';
import TeacherGradePage from './pages/teacher/TeacherGradePage';

const queryClient = new QueryClient();

const pages = [
  // STUDENT PAGES
  {
    path: '/student',
    component: StudentIndexPage,
    role: UserRole.STUDENT,
  },
  {
    path: '/student/lo',
    component: StudentLoPage,
    role: UserRole.STUDENT,
  },
  {
    path: '/student/transcript',
    component: StudentGradePage,
    role: UserRole.STUDENT,
  },
  {
    path: '/student/peer-assessment',
    component: StudentPeerAssessmentForm,
    role: UserRole.STUDENT,
  },
  {
    path: '/student/join-class',
    component: StudentJoinClassPage,
    role: UserRole.STUDENT,
  },
  // TEACHER PAGES
  {
    path: '/teacher',
    component: TeacherIndexPage,
    role: UserRole.TEACHER,
  },
  {
    path: '/teacher/lecture/:id/class',
    component: TeacherLectureClassPage,
    role: UserRole.TEACHER,
  },
  {
    path: '/teacher/lecture/:id/edit',
    component: TeacherLectureEditPage,
    role: UserRole.TEACHER,
  },
  {
    path: '/teacher/lecture/:lId/student/:sId/grade/:gId/edit',
    component: TeacherGradePage,
    role: UserRole.TEACHER,
  },
  // ADMIN PAGES
  {
    path: '/admin',
    component: AdminIndexPage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/course',
    component: AdminCoursePage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/course/:id',
    component: AdminCoursePreviewPage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/course/create',
    component: AdminCourseCreatePage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/course/edit/:id',
    component: AdminCourseEditPage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/lecture',
    component: AdminLecturePage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/lecture/:id',
    component: AdminLecturePreviewPage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/lecture/create',
    component: AdminLectureCreatePage,
    role: UserRole.ADMIN,
  },
  {
    path: '/admin/lecture/edit/:id',
    component: AdminLectureEditPage,
    role: UserRole.ADMIN,
  },
];

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router className="min-h-screen mt-20" basepath="/">
        <NotFoundPage default />
        <IndexPage path="/" />
        <RegisterPage path="/register" />
        {pages.map(({ path, component, role }) => {
          return (
            <PrivateRoute
              path={path}
              component={component}
              role={role}
              key={`page-${path}`}
            />
          );
        })}
      </Router>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';
import { Router } from '@reach/router';
import { QueryClient, QueryClientProvider } from 'react-query';

import IndexPage from '~/pages/IndexPage';
import StudentPage from '~/pages/StudentPage';
import NotFoundPage from './pages/NotFoundPage';
import TeacherPage from '~/pages/TeacherPage';
import Navbar from './components/Navbar';
import TranscriptPage from './pages/TranscriptPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router basepath="/">
        <NotFoundPage default />
        <IndexPage path="/" />
        <StudentPage path="/student" />
        <TranscriptPage path="/student/transcript" />
        <TeacherPage path="/teacher" />
      </Router>
    </QueryClientProvider>
  );
};

export default App;

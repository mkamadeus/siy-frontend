import React from 'react';
import { Router } from '@reach/router';
import { QueryClient, QueryClientProvider } from 'react-query';

import IndexPage from '~/pages/IndexPage';
import StudentPage from '~/pages/StudentPage';
import NotFoundPage from './pages/NotFoundPage';
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
      </Router>
    </QueryClientProvider>
  );
};

export default App;

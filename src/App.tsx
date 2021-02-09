import React from 'react';
import { Router } from '@reach/router';
import IndexPage from '~/pages/IndexPage';
import StudentPage from '~/pages/StudentPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Router basepath="/">
        <NotFoundPage default />
        <IndexPage path="/" />
        <StudentPage path="student" />
      </Router>
    </>
  );
};

export default App;

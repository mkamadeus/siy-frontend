import React from 'react';
import { Router } from '@reach/router';
import IndexPage from 'pages/IndexPage';

const App: React.FC = () => {
  return (
    <Router>
      <IndexPage path="/" />
    </Router>
  );
};

export default App;

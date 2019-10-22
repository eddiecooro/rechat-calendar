import React from 'react';
import pages from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'theme';
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>{pages}</Router>
    </ThemeProvider>
  );
};

export default App;

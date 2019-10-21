import React from 'react';
import Pages from './pages';
import './App.css';
import { ThemeProvider } from 'theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Pages />
    </ThemeProvider>
  );
};

export default App;

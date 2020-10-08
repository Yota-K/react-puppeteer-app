import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import AppHeader from './components/AppHeader';
import Main from './components/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Main />
    </ThemeProvider>
  );
}

export default App;

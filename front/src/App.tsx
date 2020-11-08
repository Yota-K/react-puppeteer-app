import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import AppHeader from './components/AppHeader';
import Router from './Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Result from '../pages/Result';

const Main = () => {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default Main;

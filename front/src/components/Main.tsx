import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Result from '../pages/Result';
import ResultTest from '../pages/ResultTest';
import About from '../pages/About';
import NotFound from '../pages/404';
import Container from '@material-ui/core/Container';

const Main = () => {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result/:url" component={Result} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
          {
            // <Route path="/result-test/" component={ResultTest} /> */
          }
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default Main;

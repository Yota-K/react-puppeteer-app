import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Result from '../pages/Result';
import ResultTest from '../pages/ResultTest';
import About from '../pages/About';
import Container from '@material-ui/core/Container';

const Main = () => {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result/:url" component={Result} />
          {
            // <Route path="/result-test/" component={ResultTest} /> */
          }
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default Main;

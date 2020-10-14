import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Result from '../pages/Result';
import About from '../pages/About';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default Main;

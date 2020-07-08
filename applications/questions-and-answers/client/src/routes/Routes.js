import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Github from '../pages/Github';
import About from '../pages/About';


const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/github" component={Github} />
  </React.Fragment>
);

export default Routes;

import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import GithubPage from '../pages/Github';
import AboutPage from '../pages/About';
import LoginPage from '../pages/Login';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/github" component={GithubPage} />
    <Route path="/login" component={LoginPage} />

  </React.Fragment>
);

export default Routes;

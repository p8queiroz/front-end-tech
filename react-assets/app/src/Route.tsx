import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CarouselPage from './pages/CarouselPage';
import HomePage from './pages/HomePage';
import GridPage from './pages/GridPage';
import DrawerPage from './pages/DrawerPage';
import GridPage2 from './pages/GridPage2';
import GridPage3 from './pages/GridPage3';
import Playground1 from './pages/Playground1.js';
import Playground2 from './pages/Playground';
import Card from './pages/Cards/Card';
import ProviderPage from './pages/Provider/ProviderPage';
import NotebookPage from './pages/Notebook';
import AppLayout from './components/AppLayout';

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <HomePage />}></Route>
        <Route exact path="/notebook" render={() => <NotebookPage />}></Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route path="/carousel">
          <CarouselPage />
        </Route>
        <Route path="/grid">
          <GridPage />
        </Route>
        <Route path="/grid2">
          <GridPage2 />
        </Route>
        <Route path="/grid3">
          <GridPage3 />
        </Route>
        <Route path="/playground1">
          <Playground1 />
        </Route>
        <Route path="/playground2">
          <Playground2 />
        </Route>
        <Route path="/drawer">
          <DrawerPage />
        </Route>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/provider">
          <ProviderPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterApp;

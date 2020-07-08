import React from 'react';
import { Route } from 'react-router-dom';
/*import Signup from './../Components/Signup/Signup';
import Post from './../Components/Post/Post';
import Leaderboards from './../Components/Leaderboards/Leaderboards';
import MyAchievements from './../Components/MyAchievements/MyAchievements';
import CreatePost from './../Components/CreatePost/CreatePost';
import Home from './../Components/Home/Home';
import Login from './../Components/Login/Login';*/

import Home from '../pages/Home';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
  </div>
);

export default Routes;

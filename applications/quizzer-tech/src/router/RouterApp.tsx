import React from 'react';

import MainTabs from '../pages/MainTabs';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Account from '../pages/Account';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Support from '../pages/Support';
import Tutorial from '../pages/Tutorial';
import HomeOrTutorial from '../components/HomeOrTutorial';
import DragPage from "../pages/DragPage";
import ChatPage from "../pages/ChatPage";


import QuizPage from "../pages/QuizPage";

import { setUsername, setIsLoggedIn } from '../data/user/user.actions';

interface StateProps {
}

interface DispatchProps {
    setIsLoggedIn: typeof setIsLoggedIn;
    setUsername: typeof setUsername;
}

interface RouterAppProps extends StateProps, DispatchProps { }

const RouterApp: React.FC<RouterAppProps> = ({ setIsLoggedIn, setUsername }) => {
    return (
        <IonRouterOutlet id="main">
            <Route path="/tabs" component={MainTabs} />
            <Route path="/account" component={Account} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/support" component={Support} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/quiz" component={QuizPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/drag" component={DragPage} />
            <Route path="/logout" render={() => {
                setIsLoggedIn(false);
                setUsername(undefined);
                return <Redirect to="/tabs" />
            }} />
            <Route path="/" component={HomeOrTutorial} exact />
        </IonRouterOutlet>
    )
}

export default React.memo(RouterApp);
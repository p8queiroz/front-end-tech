import React, { useEffect } from 'react';
import { IonApp, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Menu from './components/Menu/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { connect } from './data/connect';
import { AppContextProvider } from './data/AppContext';
import { loadConfData } from './data/questions/questions.actions';
import { setIsLoggedIn, setUsername, loadUserData } from './data/user/user.actions';

import { Question } from "./models/Questions";
import RouterApp from './router/RouterApp';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  );
};

interface StateProps {
  darkMode: boolean;
  questions: Question[];
}

interface DispatchProps {
  loadConfData: typeof loadConfData;
  loadUserData: typeof loadUserData;
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface IonicAppProps extends StateProps, DispatchProps { }

const IonicApp: React.FC<IonicAppProps> = ({ darkMode, questions, setIsLoggedIn, setUsername, loadConfData, loadUserData }) => {

  useEffect(() => {
    loadUserData(); // TODO - start the application
    loadConfData();
    // eslint-disable-next-line
  }, []);

  return (
    questions.length === 0 ? (
      <div></div>
    ) : (
        <IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu />
              <RouterApp setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}></RouterApp>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
      )
  )
}

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    questions: state.data.questions
  }),
  mapDispatchToProps: { loadConfData, loadUserData, setIsLoggedIn, setUsername },
  component: IonicApp
});

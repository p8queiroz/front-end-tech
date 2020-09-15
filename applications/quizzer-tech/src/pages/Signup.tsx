import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import './Login.scss';
import { setIsLoggedIn, setUsername, setUser } from '../data/user/user.actions';
import { UserViewModel } from '../data/user/user.state';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import FacebookLogin from 'react-facebook-login';

interface OwnProps extends RouteComponentProps { }

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setUser: typeof setUser;
}

interface LoginProps extends OwnProps, DispatchProps { }

const Login: React.FC<LoginProps> = ({ setIsLoggedIn, history, setUser: setUserAction, setUsername: setUsernameAction }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userexists, setUserexists] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);



  const responseFacebook = (response: any) => {
    const user: UserViewModel = { username: response.name, email: `613${response.email}`, password: response.accessToken };
    registerUSer(user);
  }

  const registerUSer = async (user: UserViewModel) => {
    console.log(user);
    await setUserAction(user);
    history.push('/tabs/questions', { direction: 'none' });
  }

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (username && password) {
      await setIsLoggedIn(true);
      await setUsernameAction(username);
      history.push('/tabs/questions', { direction: 'none' });
    }
  };

  return (
    <IonPage id="signup-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo">
          <img src="assets/img/logo512.png" alt="Quizzer Tech Logo" />
        </div>

        <form noValidate onSubmit={login}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Username</IonLabel>
              <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => {
                setUsername(e.detail.value!);
                setUsernameError(false);
              }}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
                Username is required
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Password</IonLabel>
              <IonInput name="password" type="password" value={password} onIonChange={e => {
                setPassword(e.detail.value!);
                setPasswordError(false);
              }}>
              </IonInput>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Password is required
              </p>
            </IonText>}

          </IonList>

          {userexists && <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel>
                  User already added to the application
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          }

          <IonRow>
            <IonCol size="2">
              <IonItem>
                <IonLabel>
                  Or
                </IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="10">
              <IonItem>
                <FacebookLogin
                  appId="482547819250182"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={() => console.log('clicked...')}
                  callback={responseFacebook} />
              </IonItem>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Create</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
    setUser
  },
  component: Login
})
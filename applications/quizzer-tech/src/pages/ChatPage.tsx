import React, { useState, useRef } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonSlides, IonSlide, IonIcon, useIonViewWillEnter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { setMenuEnabled } from '../data/questions/questions.actions';
import { setHasSeenTutorial } from '../data/user/user.actions';
import './ChatPage.scss';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import Chat from "../components/Chat";

interface OwnProps extends RouteComponentProps { };

interface DispatchProps {
  setHasSeenTutorial: typeof setHasSeenTutorial;
  setMenuEnabled: typeof setMenuEnabled;
}

interface TutorialProps extends OwnProps, DispatchProps { };

const ChatPage: React.FC<TutorialProps> = ({ history, setHasSeenTutorial, setMenuEnabled }) => {
  const [showSkip, setShowSkip] = useState(true);
  const slideRef = useRef<HTMLIonSlidesElement>(null);

  useIonViewWillEnter(() => {
    setMenuEnabled(false);
  });

  const startApp = async () => {
    await setHasSeenTutorial(true);
    await setMenuEnabled(true);
    history.push('/tabs/questions', { direction: 'none' });
  };

  const handleSlideChangeStart = () => {
    slideRef.current!.isEnd().then(isEnd => setShowSkip(!isEnd));
  };

  return (
    <IonPage id="chat-page">
      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="end">
            {showSkip && <IonButton color='primary' onClick={startApp}>Skip</IonButton>}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonSlides ref={slideRef} onIonSlideWillChange={handleSlideChangeStart} pager={false}>

          <IonSlide>
            <Chat></Chat>
          </IonSlide>

          <IonSlide>
            <img src="assets/img/ica-slidebox-img-4.png" alt="" className="slide-image" />
            <h2 className="slide-title">Check Results?</h2>
            <IonButton fill="clear" onClick={startApp}>
              check results
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: ({
    setHasSeenTutorial,
    setMenuEnabled
  }),
  component: ChatPage
});
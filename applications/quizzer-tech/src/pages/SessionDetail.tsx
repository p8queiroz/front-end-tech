import React from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonButton, IonIcon, IonText, IonList, IonItem, IonLabel } from '@ionic/react';
import { connect } from '../data/connect';
import { withRouter, RouteComponentProps } from 'react-router';
import * as selectors from '../data/selectors';
import { starOutline, star, share, cloudDownload } from 'ionicons/icons';
import './SessionDetail.scss';
import { addFavorite, removeFavorite } from '../data/questions/questions.actions';
import { Question } from '../models/Questions';

interface OwnProps extends RouteComponentProps { };

interface StateProps {
  question?: Question;
  favoriteQuestions: number[],
};

interface DispatchProps {
  addFavorite: typeof addFavorite;
  removeFavorite: typeof removeFavorite;
}

type SessionDetailProps = OwnProps & StateProps & DispatchProps;

const SessionDetail: React.FC<SessionDetailProps> = ({ question, addFavorite, removeFavorite, favoriteQuestions }) => {

  if (!question) {
    return <div>Question not found</div>
  }

  const isFavorite = favoriteQuestions.indexOf(question.id) > -1;

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(question.id) : addFavorite(question.id);
  };

  const descriptiontechnology = () => {
    return { __html: question.technology };
  }

  const descriptionhtml = () => {
    return { __html: question.description };
  }

  const answerhtml = () => {
    return { __html: question.answer };
  }

  const shareSession = () => { };
  const sessionClick = (text: string) => {
    console.log(`Clicked ${text}`);
  };

  return (
    <IonPage id="session-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/questions"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => toggleFavorite()}>
              {isFavorite ?
                <IonIcon slot="icon-only" icon={star}></IonIcon> :
                <IonIcon slot="icon-only" icon={starOutline}></IonIcon>
              }
            </IonButton>
            <IonButton onClick={() => shareSession}>
              <IonIcon slot="icon-only" icon={share}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <IonLabel color="primary">  <span dangerouslySetInnerHTML={descriptiontechnology()}></span></IonLabel><br />
          <h5 dangerouslySetInnerHTML={descriptionhtml()}></h5>
          <p dangerouslySetInnerHTML={answerhtml()}></p>
          {/*<IonText color="medium">
            {session.timeStart} &ndash; {session.timeEnd}
            <br />
            {session.location}
          </IonText>*/}
        </div>
        <IonList>
          <IonItem onClick={() => sessionClick('watch')} button>
            <IonLabel color="primary">Watch</IonLabel>
          </IonItem>
          <IonItem onClick={() => sessionClick('add to calendar')} button>
            <IonLabel color="primary">Add to Calendar</IonLabel>
          </IonItem>
          <IonItem onClick={() => sessionClick('mark as unwatched')} button>
            <IonLabel color="primary">Mark as Unwatched</IonLabel>
          </IonItem>
          <IonItem onClick={() => sessionClick('download video')} button>
            <IonLabel color="primary">Download Video</IonLabel>
            <IonIcon slot="end" color="primary" size="small" icon={cloudDownload}></IonIcon>
          </IonItem>
          <IonItem onClick={() => sessionClick('leave feedback')} button>
            <IonLabel color="primary">Leave Feedback</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, OwnProps) => ({
    question: selectors.getQuestion(state, OwnProps),
    favoriteQuestions: state.data.favorites
  }),
  mapDispatchToProps: {
    addFavorite,
    removeFavorite
  },
  component: withRouter(SessionDetail)
})
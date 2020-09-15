import { IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonAlert, AlertButton } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import { Question } from '../models/Questions';
import QuestionListItem from "./QuestionListItem";
import { connect } from '../data/connect';
import { addFavorite, removeFavorite } from '../data/questions/questions.actions';

interface OwnProps {
  questions: Question[];
  listType: 'all' | 'favorites';
  hide: boolean;
}

interface StateProps {
  favoriteQuestions: number[];
}

interface DispatchProps {
  addFavorite: typeof addFavorite;
  removeFavorite: typeof removeFavorite;
}

interface QuestionListProps extends OwnProps, StateProps, DispatchProps { };

const QuestionList: React.FC<QuestionListProps> = ({ addFavorite, removeFavorite, favoriteQuestions, hide, questions, listType }) => {

  const [showAlert, setShowAlert] = useState(false);
  const [alertHeader, setAlertHeader] = useState('');
  const [alertButtons, setAlertButtons] = useState<(AlertButton | string)[]>([]);

  const handleShowAlert = useCallback((header: string, buttons: AlertButton[]) => {
    setAlertHeader(header);
    setAlertButtons(buttons);
    setShowAlert(true);
  }, []);

  if (questions.length === 0 && !hide) {
    return (
      <IonList>
        <IonListHeader>
          No questions Found
        </IonListHeader>
      </IonList>
    );
  }

  return (
    <>
      <IonList style={hide ? { display: 'none' } : {}}>
        <IonItemGroup>
          <IonItemDivider sticky>
            <IonLabel>
              Quizzer App
            </IonLabel>
          </IonItemDivider>
          {questions.map((question: Question, questionIndex: number) => (
            <QuestionListItem
              onShowAlert={handleShowAlert}
              isFavorite={favoriteQuestions.indexOf(question.id) > -1}
              onAddFavorite={addFavorite}
              onRemoveFavorite={removeFavorite}
              key={`question-${questionIndex}`}
              question={question}
              listType={listType}
            />
          ))}
        </IonItemGroup>

      </IonList>
      <IonAlert
        isOpen={showAlert}
        header={alertHeader}
        buttons={alertButtons}
        onDidDismiss={() => setShowAlert(false)}
      ></IonAlert>
    </>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    favoriteQuestions: state.data.favorites
  }),
  mapDispatchToProps: ({
    addFavorite,
    removeFavorite
  }),
  component: QuestionList
});
import React, { useRef } from 'react';
import { IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, AlertButton, IonNote } from '@ionic/react';
import { Question } from '../models/Questions';

interface QuestionListItemProps {
  question: Question;
  listType: "all" | "favorites";
  onAddFavorite: (id: number) => void;
  onRemoveFavorite: (id: number) => void;
  onShowAlert: (header: string, buttons: AlertButton[]) => void;
  isFavorite: boolean;
}

const QuestionListItem: React.FC<QuestionListItemProps> = ({ isFavorite, onAddFavorite, onRemoveFavorite, onShowAlert, question, listType }) => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null)

  const dismissAlert = () => {
    ionItemSlidingRef.current && ionItemSlidingRef.current.close();
  }

  const removeFavorite = () => {
    onAddFavorite(question.id);
    onShowAlert('Favorite already added', [
      {
        text: 'Cancel',
        handler: dismissAlert
      },
      {
        text: 'Remove',
        handler: () => {
          onRemoveFavorite(question.id);
          dismissAlert();
        }
      }
    ]);
  }

  const addFavorite = () => {
    if (isFavorite) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      removeFavorite();
    } else {
      // remember this session as a user favorite
      onAddFavorite(question.id);
      onShowAlert('Favorite Added', [
        {
          text: 'OK',
          handler: dismissAlert
        }
      ]);
    }
  };

  const descriptionhtml = () => {
    return { __html: question.description };
  }


  return (
    <IonItemSliding ref={ionItemSlidingRef} class={'question-' + question.id.toString()}>
      <IonItem routerLink={`/tabs/questions/${question.id}`}>
        <IonNote>
          <p dangerouslySetInnerHTML={descriptionhtml()}></p>
        </IonNote>
      </IonItem>
      <IonItemOptions>
        {listType === "favorites" ?
          <IonItemOption color="danger" onClick={() => removeFavorite()}>
            Remove
          </IonItemOption>
          :
          <IonItemOption color="favorite" onClick={addFavorite}>
            Favorite
          </IonItemOption>
        }
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default React.memo(QuestionListItem);
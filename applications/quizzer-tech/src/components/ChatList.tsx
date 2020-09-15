import React, { useRef } from 'react';
import { IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, AlertButton } from '@ionic/react';
import { Question } from '../models/Questions';

interface TestListItemProps {
  listType: "all" | "favorites";
  question: Question,
  onAddFavorite: (id: number) => void;
  onRemoveFavorite: (id: number) => void;
  onShowAlert: (header: string, buttons: AlertButton[]) => void;
  isFavorite: boolean;
}

const TestListItem: React.FC<TestListItemProps> = ({ isFavorite, question, onAddFavorite, onRemoveFavorite, onShowAlert, listType }) => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null)

  const dismissAlert = () => {
    ionItemSlidingRef.current && ionItemSlidingRef.current.close();
  }

  const removeFavoriteSession = () => {
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

  const addFavoriteSession = () => {
    if (isFavorite) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      removeFavoriteSession();
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

  return (
    <IonItemSliding ref={ionItemSlidingRef} class={'track-' + question.technology.toLowerCase()}>
      <IonItem routerLink={`/tabs/questions/${question.id}`}>
        <IonLabel>
          <h3>{question.description}</h3>
          <p>
            {question.answer}
          </p>
        </IonLabel>
      </IonItem>
      <IonItemOptions>
        {listType === "favorites" ?
          <IonItemOption color="danger" onClick={() => removeFavoriteSession()}>
            Remove
          </IonItemOption>
          :
          <IonItemOption color="favorite" onClick={addFavoriteSession}>
            Favorite
          </IonItemOption>
        }
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default React.memo(TestListItem);
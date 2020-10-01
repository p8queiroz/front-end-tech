import { IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonAlert, AlertButton, IonContent, IonReorderGroup, IonItem, IonReorder, IonIcon } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import { Question } from '../../models/Questions';
import { connect } from '../../data/connect';
import { addFavorite, removeFavorite } from '../../data/questions/questions.actions';
import { pizza } from 'ionicons/icons';
import { ItemReorderEventDetail } from '@ionic/core';
import './Droppable.scss';

interface OwnProps {

}

interface StateProps {
    favoriteSessions: number[];
}

interface DispatchProps {
    addFavorite: typeof addFavorite;
    removeFavorite: typeof removeFavorite;
}

interface TestListProps extends OwnProps, StateProps, DispatchProps { };

const Droppable: React.FC<TestListProps> = ({ addFavorite, removeFavorite, favoriteSessions }) => {

    const [showAlert, setShowAlert] = useState(false);
    const [alertHeader, setAlertHeader] = useState('');
    const [alertButtons, setAlertButtons] = useState<(AlertButton | string)[]>([]);

    const handleShowAlert = useCallback((header: string, buttons: AlertButton[]) => {
        // setAlertHeader(header);
        // setAlertButtons(buttons);
        //  setShowAlert(true);
    }, []);

    const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
    }


    return (
        <>
            <IonList>
                {/*-- The reorder gesture is disabled by default, enable it to drag and drop items --*/}
                <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
                    <IonItem>
                        <IonLabel>Item 1</IonLabel>
                        <IonReorder slot="end" />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Item 2</IonLabel>
                        <IonReorder slot="end" />
                    </IonItem>

                    {/*-- Default reorder icon, start aligned items --*/}
                    <IonItem>
                        <IonReorder slot="start" />
                        <IonLabel>Item 3</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonReorder slot="start" />
                        <IonLabel>Item 4</IonLabel>
                    </IonItem>

                    {/*-- Custom reorder icon end items --*/}
                    <IonItem>
                        <IonLabel>Item 5</IonLabel>
                        <IonReorder slot="end">
                            <IonIcon icon={pizza} />
                        </IonReorder>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Item 6</IonLabel>
                        <IonReorder slot="end">
                            <IonIcon icon={pizza} />
                        </IonReorder>
                    </IonItem>
                </IonReorderGroup>
            </IonList>
        </>
    );
};

export default connect<OwnProps, StateProps, DispatchProps>({
    mapStateToProps: (state) => ({
        favoriteSessions: state.data.favorites
    }),
    mapDispatchToProps: ({
        addFavorite,
        removeFavorite
    }),
    component: Droppable
});
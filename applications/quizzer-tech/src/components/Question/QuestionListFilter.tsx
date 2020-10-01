import React from 'react';

import { getMode } from '@ionic/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonCheckbox, IonFooter, IonIcon } from '@ionic/react';
import { logoAngular, logoNodejs, logoJavascript, micSharp, logoIonic, logoReact, cog, colorPalette } from 'ionicons/icons';

import './QuestionListFilter.css'

import { connect } from '../../data/connect';
import { updateFiltered } from '../../data/questions/questions.actions';

interface OwnProps {
  onDismissModal: () => void;
}

interface StateProps {
  allTechnologies: string[],
  filteredTechnologies: string[]
}

interface DispatchProps {
  updateFiltered: typeof updateFiltered;
}

type QuestionListFilterProps = OwnProps & StateProps & DispatchProps;

const QuestionListFilter: React.FC<QuestionListFilterProps> = ({ allTechnologies, filteredTechnologies, onDismissModal, updateFiltered }) => {
  const ios = getMode() === 'ios';

  const toggleFilter = (tech: string) => {
    if (filteredTechnologies.indexOf(tech) > -1) {
      updateFiltered(filteredTechnologies.filter(x => x !== tech));
    } else {
      updateFiltered([...filteredTechnologies, tech]);
    }
  };

  const handleDeselectAll = () => {
    updateFiltered([]);
  };

  const handleSelectAll = () => {
    updateFiltered([...allTechnologies]);
  };

  const iconMap: { [key: string]: any } = {
    'js': logoJavascript,
    'react': logoReact,
    'c#': micSharp,
    'angular': logoAngular,
    'ionic': logoIonic,
    'design': colorPalette,
    'services': cog,
    'nodejs': logoNodejs
  }

  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            {ios &&
              <IonButton onClick={onDismissModal}>Cancel</IonButton>
            }
            {!ios &&
              <IonButton onClick={handleDeselectAll}>Reset</IonButton>
            }
          </IonButtons>

          <IonTitle>
            Filters
          </IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={onDismissModal} strong>Done</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList lines={ios ? 'inset' : 'full'}>
          <IonListHeader>Technologies</IonListHeader>

          {allTechnologies.map((tech, index) => (
            <IonItem key={tech}>
              {ios &&
                <IonIcon slot="start" icon={iconMap[tech]} color="medium" />
              }
              <IonLabel>{tech}</IonLabel>
              <IonCheckbox
                onClick={() => toggleFilter(tech)}
                checked={filteredTechnologies.indexOf(tech) !== -1}
                color="primary"
                value={tech}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

      {ios &&
        <IonFooter>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={handleDeselectAll}>Deselect All</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={handleSelectAll}>Select All</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      }
    </>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    allTechnologies: state.data.allTechs,
    filteredTechnologies: state.data.filteredTechs
  }),
  mapDispatchToProps: {
    updateFiltered
  },
  component: QuestionListFilter
})

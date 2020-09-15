import { QuestionsActions } from './questions.actions';
import { QuestionState } from './questions.state';

export const sessionsReducer = (state: QuestionState, action: QuestionsActions): QuestionState => {
  switch (action.type) {
    case 'set-conf-loading': {
      return { ...state, loading: action.isLoading };
    }
    case 'set-conf-data': {
      return { ...state, ...action.data };
    }
    case 'add-favorite': {
      return { ...state, favorites: [...(state.favorites), action.questionId] };
    }
    case 'remove-favorite': {
      return { ...state, favorites: [...(state.favorites).filter(x => x !== action.questionId)] };
    }
    case 'update-filtered-techs': {
      return { ...state, filteredTechs: action.filteredTechs };
    }
    case 'set-search-text': {
      return { ...state, searchText: action.searchText };
    }
    case 'set-menu-enabled': {
      return { ...state, menuEnabled: action.menuEnabled };
    }
  }
}
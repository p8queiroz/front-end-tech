import { combineReducers } from './combineReducers';
import { sessionsReducer } from './questions/questions.reducer';
import { userReducer } from './user/user.reducer';

export const initialState: AppState = {
  data: {
    questions: [],
    sessions: [],
    speakers: [],
    favorites: [],
    locations: [],
    filteredTechs: [],
    allTechs: [],
    mapCenterId: 0,
    loading: false,
    menuEnabled: true
  },
  user: {
    hasSeenTutorial: false,
    darkMode: false,
    isLoggedin: false,
    loading: false
  }
};

export const reducers = combineReducers({
  data: sessionsReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof reducers>;
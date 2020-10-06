import { combineReducers } from './combineReducers';
import { questionReducer } from './questions/questions.reducer';
import { userReducer } from './user/user.reducer';

export const initialState: AppState = {
  data: {
    questions: [],
    favorites: [],
    filteredTechs: [],
    allTechs: [],
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
  data: questionReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof reducers>;
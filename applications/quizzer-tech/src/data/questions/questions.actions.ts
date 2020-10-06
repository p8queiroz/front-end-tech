import { getAppData } from '../dataApi';
import { ActionType } from '../../utils/types';
import { QuestionState } from './questions.state';

export const loadConfData = () => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  const data = await getAppData();
  dispatch(setData(data));
  dispatch(setLoading(false));
}

export const setLoading = (isLoading: boolean) => ({
  type: 'set-conf-loading',
  isLoading
} as const);

export const setData = (data: Partial<QuestionState>) => ({
  type: 'set-conf-data',
  data
} as const);

export const addFavorite = (questionId: number) => ({
  type: 'add-favorite',
  questionId
} as const);

export const removeFavorite = (questionId: number) => ({
  type: 'remove-favorite',
  questionId
} as const);

export const updateFiltered = (filteredTechs: string[]) => ({
  type: 'update-filtered-techs',
  filteredTechs
} as const);

export const setSearchText = (searchText?: string) => ({
  type: 'set-search-text',
  searchText
} as const);

export const setMenuEnabled = (menuEnabled: boolean) => ({
  type: 'set-menu-enabled',
  menuEnabled
} as const);

export type QuestionsActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof addFavorite>
  | ActionType<typeof removeFavorite>
  | ActionType<typeof updateFiltered>
  | ActionType<typeof setSearchText>
  | ActionType<typeof setMenuEnabled>

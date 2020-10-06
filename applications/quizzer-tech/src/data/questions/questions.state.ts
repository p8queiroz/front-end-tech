import { Question } from '../../models/Questions';

export interface QuestionState {
  questions: Question[];
  favorites: number[];
  searchText?: string;
  loading?: boolean;
  allTechs: string[];
  filteredTechs: string[];
  menuEnabled: boolean;
  // speakers: Speaker[];
  // sessions: Session[];
  // locations: Location[];
  // mapCenterId?: number;
}

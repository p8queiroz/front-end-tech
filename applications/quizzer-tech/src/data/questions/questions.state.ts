import { Location } from '../../models/Location';
import { Speaker } from '../../models/Speaker';
import { Question, Session } from '../../models/Questions';

export interface QuestionState {
  questions: Question[];
  sessions: Session[];
  speakers: Speaker[];
  favorites: number[];
  locations: Location[];
  filteredTechs: string[];
  searchText?: string;
  mapCenterId?: number;
  loading?: boolean;
  allTechs: string[];
  menuEnabled: boolean;
}

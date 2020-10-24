import { createSelector } from 'reselect';
import { Question, Session, ScheduleGroup } from '../models/Questions';
import { AppState } from './state';

const getQuestions = (state: AppState) => {
  return state.data.questions
};
//export const getSpeakers = (state: AppState) => state.data.speakers;
const getFilteredTechs = (state: AppState) => state.data.filteredTechs;
const getFavoriteIds = (state: AppState) => state.data.favorites;
const getSearchText = (state: AppState) => state.data.searchText;

const getIdParam = (_state: AppState, props: any) => {
  return props.match.params['id'];
}

export const getQuestion = createSelector(
  getQuestions, getIdParam,
  (questions, id) => {
    return questions.find(s => s.id == id);
  }
);

export const getFilteredQuestions = createSelector(
  getQuestions, getFilteredTechs, //A,B
  (questions, filteredTechs) => { //A,B
    if (filteredTechs.length === 0) return questions;
    //** TODO commitar no repositório do ionic */
    const filteredQuestions: Question[] = [];
    questions.forEach(question => {
      if (filteredTechs.indexOf(question.technology) > -1) {
        filteredQuestions.push(question);
      }
    })
    return filteredQuestions;
  }
);

export const getSearchedQuestions = createSelector(
  getFilteredQuestions, getSearchText,
  (questions, searchText) => {
    if (!searchText) {
      return questions;
    }
    return questions.filter(s => s.description.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
  }
)

export const getQuestionList = createSelector(
  getSearchedQuestions,
  (questions) => questions
);

export const favoritesQuestions = createSelector(
  getQuestionList, getFavoriteIds,
  (questions, favoriteIds) => {
    const favquestions = questions.filter(s => favoriteIds.indexOf(s.id) > -1)
    return favquestions;
  }
);

/*export const mapCenter = (state: AppState) => {
  const item = state.data.locations.find(l => l.id === state.data.mapCenterId);
  if (item == null) {
    return {
      id: 1,
      name: 'Map Center',
      lat: 43.071584,
      lng: -89.380120
    };
  }
  return item;
}*/


/*
export const getFilteredSchedule = createSelector(
  getSchedule, getFilteredTracks,
  (questions, filteredTracks) => {
    const groups: ScheduleGroup[] = [];
    questions.forEach(group => {
      const sessions: Session[] = [];
      group.sessions.forEach(session => {
        session.tracks.forEach(track => {
          if (filteredTracks.indexOf(track) > -1) {
            sessions.push(session);
          }
        })
      })
      if (sessions.length) {
        const groupToAdd: ScheduleGroup = {
          time: group.time,
          sessions
        }
        groups.push(groupToAdd);
      }
    });

    return {
      date: questions.date,
      groups
    } as Questions;
  }
);

export const getSearchedSchedule = createSelector(
  getFilteredSchedule, getSearchText,
  (questions, searchText) => {
    if (!searchText) {
      return questions;
    }
    const groups: ScheduleGroup[] = [];
    questions.groups.forEach(group => {

      const sessions = group.sessions.filter(s => s.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      if (sessions.length) {
        const groupToAdd: ScheduleGroup = {
          time: group.time,
          sessions
        }
        groups.push(groupToAdd);
      }
    });
    return {
      date: questions.date,
      groups
    } as Question;
  }
)

export const getScheduleList = createSelector(
  getSearchedSchedule,
  (questions) => questions
);

export const getGroupedFavorites = createSelector(
  getScheduleList, getFavoriteIds,
  (questions, favoriteIds) => {
    const groups: ScheduleGroup[] = [];
    questions.groups.forEach(group => {
      const sessions = group.sessions.filter(s => favoriteIds.indexOf(s.id) > -1)
      if (sessions.length) {
        const groupToAdd: ScheduleGroup = {
          time: group.time,
          sessions
        }
        groups.push(groupToAdd);
      }
    });
    return {
      date: questions.date,
      groups
    } as Question;
  }
);


const getIdParam = (_state: AppState, props: any) => {
  return props.match.params['id'];
}

export const getSession = createSelector(
  getSessions, getIdParam,
  (sessions, id) => {
    return sessions.find(s => s.id === id);
  }
);

export const getSpeaker = createSelector(
  getSpeakers, getIdParam,
  (speakers, id) => speakers.find(x => x.id === id)
);

export const getSpeakerSessions = createSelector(
  getSessions,
  (sessions) => {
    const speakerSessions: { [key: string]: Session[] } = {};

    sessions.forEach(session => {
      session.speakerNames && session.speakerNames.forEach(name => {
        if (speakerSessions[name]) {
          speakerSessions[name].push(session);
        } else {
          speakerSessions[name] = [session];
        }
      })
    });
    return speakerSessions;
  }
);

export const mapCenter = (state: AppState) => {
  const item = state.data.locations.find(l => l.id === state.data.mapCenterId);
  if (item == null) {
    return {
      id: 1,
      name: 'Map Center',
      lat: 43.071584,
      lng: -89.380120
    };
  }
  return item;
}
*/

/*
--yOU CAN FIND THE CONCEPT OF MEMOIZATION READING THE CODE BELLOW
const state = {
    a : {
        first : 5
    },
    b : 10
};


const selectA = state => state.a;
const selectB = state => state.b;

const selectA1 = createSelector(
    [selectA],
    a => a.first
);

const selectResult = createSelector(
    [selectA1, selectB],
    (a1, b) => {
        console.log("Output selector running");
        return a1 + b;
    }
);

const result = selectResult(state);
// Log: "Output selector running"
console.log(result);
// 15

const secondResult = selectResult(state);
// No log output
console.log(secondResult);
// 15


It's important to note that by default, Reselect only memoizes the most recent set of parameters. That means that if you call a selector repeatedly with different inputs, it will still return a result, but it will have to keep re-running the output selector to produce the result:

const a = someSelector(state, 1); // first call, not memoized
const b = someSelector(state, 1); // same inputs, memoized
const c = someSelector(state, 2); // different inputs, not memoized
const d = someSelector(state, 1); // different inputs from last time, not memoized
*/
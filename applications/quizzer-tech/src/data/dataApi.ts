import { Plugins } from '@capacitor/core';
import { Question } from '../models/Questions';
import { Location } from '../models/Location';
import { UserViewModel } from './user/user.state';

const { Storage } = Plugins;

//const dataUrl = '/assets/data/data.json';
//const locationsUrl = '/assets/data/locations.json';

const HAS_LOGGED_IN = 'hasLoggedIn';
const HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
const USERNAME = 'username';
const EMAIL = 'email';
const TOKEN = 'token';

const requestInit = {
  method: 'POST',
}

export const getQuestions = async () => {
  const getQuestionsURL = `http://quizzertech.com/system/wp-json/application-api/v1/om-question`;
  return fetch(getQuestionsURL);
}

export const getAppData = async () => {
  const response = await Promise.all([
    getQuestions(),
  ]);

  const responseDataQuestions = await response[0].json();
  const questions = responseDataQuestions as Question[];
  //const locations = await response[1].json() as Location[];

  const allTechs = questions
    .reduce((all, question) => all.concat(question.technology), [] as string[])
    .filter((technology, index, array) => array.indexOf(technology) === index)
    .sort();

  const data = {
    questions,
    allTechs,
  }

  return data;
}

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_LOGGED_IN }),
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: USERNAME }),
    Storage.get({ key: EMAIL })]);
  const isLoggedin = await response[0].value === 'true';
  const hasSeenTutorial = await response[1].value === 'true';
  const username = await response[2].value || undefined;
  const email = await response[3].value || undefined;

  const data = {
    isLoggedin,
    hasSeenTutorial,
    username,
    email
  }
  return data;
}

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) });
}

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({ key: HAS_SEEN_TUTORIAL, value: JSON.stringify(hasSeenTutorial) });
}

export const setUsernameData = async (username?: string) => {
  if (!username) {
    await Storage.remove({ key: USERNAME });
  } else {
    await Storage.set({ key: USERNAME, value: username });
  }
}

export const setUserTokenData = async (token?: string) => {
  if (!token) {
    await Storage.remove({ key: TOKEN });
  } else {
    await Storage.set({ key: TOKEN, value: token });
  }
}

export const setUserEmailData = async (email?: string) => {
  if (!email) {
    await Storage.remove({ key: EMAIL });
  } else {
    await Storage.set({ key: EMAIL, value: email });
  }
}


export const setLogarUsuarioData = async (userName: string, password: string) => {
  const login = `http://quizzertech.com/system/wp-json/jwt-auth/v1/token?username=${userName}&password=${password}`;
  const response = await Promise.all([
    fetch(login, requestInit)]);
  const responseData = await response[0].json();
  return responseData;
}

export const setUserData = async (user: UserViewModel) => {
  const register = `http://quizzertech.com/system/wp-json/application-api/v1/user/?username=${user.username}&email=${user.email}&password=${user.password}`;
  const response = await Promise.all([
    fetch(register, requestInit)]);
  const responseData = await response[0].json();
  return responseData;
}


import { getUserData, setIsLoggedInData, setUsernameData, setUserEmailData, setUserTokenData, setHasSeenTutorialData, setLogarUsuarioData, setUserData } from '../dataApi';
import { ActionType } from '../../config/types';
import { UserState, UserViewModel } from './user.state';


export const loadUserData = () => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  const data = await getUserData();
  dispatch(setData(data));
  dispatch(setLoading(false));
}

export const setLoading = (isLoading: boolean) => ({
  type: 'set-user-loading',
  isLoading
} as const);

export const setData = (data: Partial<UserState>) => ({
  type: 'set-user-data',
  data
} as const);

export const logoutUser = () => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(false);

};

export const setIsLoggedIn = (loggedIn: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(loggedIn);
  return ({
    type: 'set-is-loggedin',
    loggedIn
  } as const)
};

export const setUsername = (username?: string) => async (dispatch: React.Dispatch<any>) => {
  await setUsernameData(username);
  return ({
    type: 'set-username',
    username
  } as const);
};

export const setUserEmail = (email?: string) => async (dispatch: React.Dispatch<any>) => {

  debugger;
  await setUserEmailData(email);

  return ({
    type: 'set-email',
    email
  } as const);
};

export const setHasSeenTutorial = (hasSeenTutorial: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setHasSeenTutorialData(hasSeenTutorial);
  return ({
    type: 'set-has-seen-tutorial',
    hasSeenTutorial
  } as const);
}

export const setLogarUsuario = (username: string, password: string) => async (dispatch: React.Dispatch<any>) => {
  await setLogarUsuarioData(username, password);
}

export const setUser = (user: UserViewModel) => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));

  const response = await setUserData(user);
  const { data } = response;

  if (data && data.status && data.status === 403) {
    debugger
    await setIsLoggedInData(false);
  } else {
    debugger
    setUserEmailData(user.email);
    setUsernameData(user.username);
    const responsel = await setLogarUsuarioData(user.email, user.password);
    const { data } = responsel;
    if (!(data && data.status && data.status === 403)) {
      debugger;
      setUserTokenData(responsel.token);
    }

  }


  dispatch(setLoading(false));

}


export const setDarkMode = (darkMode: boolean) => ({
  type: 'set-dark-mode',
  darkMode
} as const);


export type UserActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof setIsLoggedIn>
  | ActionType<typeof setUsername>
  | ActionType<typeof setUserEmail>
  | ActionType<typeof setHasSeenTutorial>
  | ActionType<typeof setDarkMode>

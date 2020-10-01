export interface UserState {
  isLoggedin: boolean;
  username?: string;
  email?: string;
  darkMode: boolean;
  hasSeenTutorial: boolean;
  loading: boolean;
};


export interface UserViewModel {
  username: string;
  email: string;
  password: string;
}
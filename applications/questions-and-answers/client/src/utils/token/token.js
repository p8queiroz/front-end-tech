const ACCESS_TOKEN_KEY = 'access_token';

export const removeToken = () => localStorage.clear();

export const getToken = () => localStorage.getItem(ACCESS_TOKEN_KEY) || '';

export const setToken = token => localStorage.setItem(ACCESS_TOKEN_KEY, token);

export const getTokenBearer = () => `Bearer ${getToken()}`;

export const checkToken = () => {
  if (!getToken() && window.location.href.indexOf('/') !== -1) {
    window.location.href = '/login';
  }
}

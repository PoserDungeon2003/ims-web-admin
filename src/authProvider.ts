import { AuthProvider } from "react-admin";
import { apiUrl } from "./dataProvider";

export type LoginRS = {
  email: string,
  id: number,
  name: string,
  token?: string,
  refreshToken?: string,
  role?: string
}

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const request = new Request(
      apiUrl + '/users/login',
      {
        method: 'POST',
        body: JSON.stringify({ email: username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }
    );
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<LoginRS>;
      })
      .then((auth) => {
        localStorage.setItem(
          'auth',
          JSON.stringify({ ...auth, role: auth.role, token: auth.token, refreshToken: auth.refreshToken })
        );
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () =>
    localStorage.getItem('auth')
      ? Promise.resolve()
      : Promise.reject({ message: 'login required' })
  ,
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),

  getIdentity: () => {
    try {
      const { id, name, email } = JSON.parse(localStorage.getItem('auth') || '') as LoginRS;
      return Promise.resolve({ id, name, email });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
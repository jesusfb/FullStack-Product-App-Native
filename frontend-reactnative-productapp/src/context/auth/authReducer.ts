import { AuthState } from '.';

import { Auth } from '../../interfaces';

type AuthActionType =
  | { type: '[auth] - Login', payload: Auth }
  | { type: '[auth] - Renew', payload: Auth }
  | { type: '[auth] - Logout' }

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case '[auth] - Login':
      return {
        ...state,
        authenticated: action.payload.authenticated,
        user: action.payload.user,
        logging: false
      }

    case '[auth] - Renew':
      return {
        ...state,
        authenticated: action.payload.authenticated,
        user: action.payload.user,
        logging: false
      }

    case '[auth] - Logout':
      return {
        ...state,
        logging: false
      }

    default:
      return state;
  }
}
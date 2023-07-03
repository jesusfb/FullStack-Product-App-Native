import { AuthState } from '.';

type AuthActionType =
  | { type: '[auth] - Login', payload: boolean }
  | { type: '[auth] - Renew', payload: boolean }
  | { type: '[auth] - Logout' }

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {

  switch (action.type) {
    case '[auth] - Login':
      return {
        ...state,
        authenticated: action.payload,
        logging: false
      }

    case '[auth] - Renew':
      return {
        ...state,
        authenticated: action.payload,
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
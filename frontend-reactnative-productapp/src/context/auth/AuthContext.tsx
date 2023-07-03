import { createContext } from 'react';

import { Login, User } from '../../interfaces';

interface ContextProps {
  logging: boolean;
  authenticated?: boolean | null;
  user?: User;

  authLogin: (login: Login) => void;
  authRegister: (register: Login) => void;
  authLoad: () => void;
  authLogout: () => void;
}

export const AuthContext = createContext({} as ContextProps);
import { createContext } from 'react';

import { Auth } from '../../interfaces';

interface ContextProps {
  logging: boolean,
  authenticated?: boolean | null,

  authLogin: (auth: Auth) => void;
  authLoad: () => void;
  authLogout: () => void;
}

export const AuthContext = createContext({} as ContextProps);
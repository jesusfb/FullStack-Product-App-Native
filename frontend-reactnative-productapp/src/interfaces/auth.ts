import { User } from '.';

export interface Login {
  username: string;
  password: string
}

export interface Register {
  username: string;
  email: string;
  name: string;
  lastname: string;
  password: string;
}

export interface AuthResponse {
  msg: string;
  resultado: {
    token: string;
    user: User;
  };
  ok: boolean;
}

export interface Auth {
  authenticated: boolean;
  user?: User;
}
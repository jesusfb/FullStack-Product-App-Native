export interface Auth {
  username: string;
  password: string
}

export interface AuthResponse {
  msg: string;
  resultado: { token: string };
  ok: boolean;
}
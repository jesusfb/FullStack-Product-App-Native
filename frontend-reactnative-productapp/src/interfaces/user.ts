export interface User {
  email: string;
  username: string;
  password: string;
  name: string;
  lastname: string;
  isActive: boolean;
  createdAt?: string;
}
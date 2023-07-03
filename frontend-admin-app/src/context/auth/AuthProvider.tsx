import { FC, PropsWithChildren, useReducer } from 'react';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { AuthContext, authReducer } from './';

import { Auth, AuthResponse } from '../../interfaces';
import productsApi from '../../api/productApi';

interface iAxiosError extends AxiosError { }

export interface AuthState {
  logging: boolean;
  authenticated?: boolean | null;
}


const Auth_INITIAL_STATE: AuthState = {
  logging: true
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const authLogin = async ({ username, password }: Auth) => {
    try {
      const { data } = await productsApi.post<AuthResponse>(`/users/auth/sign-in`, { username, password, auth: true });

      if (data.ok) {
        dispatch({ type: '[auth] - Login', payload: true })
        localStorage.setItem('token', data.resultado?.token);

        enqueueSnackbar(data.msg, {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: { vertical: 'top', horizontal: 'right' }
        })
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as AuthResponse
      enqueueSnackbar(data.msg, {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
      })

      dispatch({ type: '[auth] - Login', payload: false })
    }
  }

  const authLoad = async () => {
    try {
      const { data } = await productsApi.get<AuthResponse>('/users/auth/renew');

      if (data.ok) {
        dispatch({ type: '[auth] - Login', payload: true })
        localStorage.setItem('token', data.resultado.token);
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as AuthResponse
      enqueueSnackbar(data.msg, {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
      })

      dispatch({ type: '[auth] - Login', payload: false })
    }
  }

  const authLogout = () => {
    localStorage.clear();
    dispatch({ type: '[auth] - Login', payload: false })
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      authLogin,
      authLoad,
      authLogout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
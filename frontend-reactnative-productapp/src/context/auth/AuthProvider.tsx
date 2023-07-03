import { FC, PropsWithChildren, useReducer, useEffect } from 'react';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { AuthContext, authReducer } from './';

import { Login, AuthResponse, User } from '../../interfaces';
import productsApi from '../../api/productApi';

interface iAxiosError extends AxiosError { }

export interface AuthState {
  logging: boolean;
  authenticated?: boolean | null;
  user?: User;
}

const Auth_INITIAL_STATE: AuthState = {
  logging: true,
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  useEffect(() => {
    authLoad()
  }, [])

  const authLogin = async ({ username, password }: Login) => {
    try {
      const { data } = await productsApi.post<AuthResponse>(`/users/auth/sign-in`, { username, password, auth: false });

      if (data.ok) {
        dispatch({ type: '[auth] - Login', payload: { authenticated: true, user: data.resultado.user } })
        await AsyncStorage.setItem('token', data.resultado?.token);

        Toast.show({
          type: 'success',
          text1: 'Authentication Success',
          text2: data.msg,
          visibilityTime: 2500,
          topOffset: 10,
        });
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as AuthResponse;

      dispatch({ type: '[auth] - Login', payload: { authenticated: false } })
      Toast.show({
        type: 'error',
        text1: 'Register Error',
        text2: data.msg,
        visibilityTime: 2500,
        topOffset: 10,
      });
    }
  }

  const authRegister = async (register: Login) => {
    try {
      const { data } = await productsApi.post<AuthResponse>(`/users`, { ...register, role: 'user' });

      if (data.ok) {
        dispatch({ type: '[auth] - Login', payload: { authenticated: true, user: data.resultado.user } })
        await AsyncStorage.setItem('token', data.resultado?.token);

        Toast.show({
          type: 'success',
          text1: 'Authentication Success',
          text2: data.msg,
          visibilityTime: 2500,
          topOffset: 10,
        });
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as AuthResponse;

      dispatch({ type: '[auth] - Login', payload: { authenticated: false } })
      Toast.show({
        type: 'error',
        text1: 'Register Error',
        text2: data.msg,
        visibilityTime: 2500,
        topOffset: 10,
      });
    }
  }

  const authLoad = async () => {
    try {
      const { data } = await productsApi.get<AuthResponse>('/users/auth/renew');

      if (data.ok) {
        dispatch({ type: '[auth] - Login', payload: { authenticated: true, user: data.resultado.user } })
        await AsyncStorage.setItem('token', data.resultado?.token);
      }
    } catch (error) {
      const { response } = error as iAxiosError;
      const data = response?.data as AuthResponse;

      dispatch({ type: '[auth] - Login', payload: { authenticated: false } })
      Toast.show({
        type: 'error',
        text1: 'Register Error',
        text2: data.msg,
        visibilityTime: 1500,
        topOffset: 10,
      });
    }
  }

  const authLogout = async () => {
    await AsyncStorage.clear()
    dispatch({ type: '[auth] - Login', payload: { authenticated: false } });
    Toast.show({
      type: 'success',
      text1: 'Logout Correctly',
      visibilityTime: 2500,
      topOffset: 10,
    });
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      authLogin,
      authRegister,
      authLoad,
      authLogout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
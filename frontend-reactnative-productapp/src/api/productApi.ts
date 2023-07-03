import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PRODUCT_API_URL } from '@env';

const productsApi = axios.create({
  baseURL: PRODUCT_API_URL,
});

interface iAxiosHeaders extends AxiosHeaders {
  'x-token': string | null;
}

productsApi.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await AsyncStorage.getItem('token');
  config.headers = {
    ...config.headers,
    'x-token': token,
  } as iAxiosHeaders

  return config;
})

export default productsApi;
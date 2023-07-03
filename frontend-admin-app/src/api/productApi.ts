import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';

const productsApi = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

interface iAxiosHeaders extends AxiosHeaders {
  'x-token': string;
}

// Todo: configurar interceptores
productsApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  } as iAxiosHeaders

  return config;
})


export default productsApi;
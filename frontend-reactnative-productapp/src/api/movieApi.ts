import axios from 'axios';
import { MOVIE_API_URL, MOVIE_API_KEY } from '@env';

export const movieDBApi = axios.create({
  baseURL: MOVIE_API_URL,
  params: {
    api_key: MOVIE_API_KEY,
    language: 'en-US',
  }
})
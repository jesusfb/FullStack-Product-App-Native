import { useState } from 'react';

import { movieDBApi } from '../api/movieApi';
import { MovieResponse, Movie } from '../interfaces/movie';

interface MoviesState {
  nowPlaying: Movie[];
}

export const useMovies = () => {

  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
  })

  const getMovies = async () => {
    const nowPlayingPromise = movieDBApi.get<MovieResponse>('/now_playing');

    const resps = await Promise.all([
      nowPlayingPromise
    ])

    setMoviesState({
      nowPlaying: resps[0].data.results,
    })
  }

  return {
    ...moviesState,
    getMovies
  }
}
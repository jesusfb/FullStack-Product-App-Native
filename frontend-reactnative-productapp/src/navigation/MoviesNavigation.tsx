import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { Movie } from '../interfaces';
import { MovieScreen, MovieDetailScreen } from '../modules/app/screens';

export type MovieStackParaams = {
  MovieScreen: undefined;
  MovieDetailScreen: Movie;
}

const Stack = createSharedElementStackNavigator<MovieStackParaams>();

const MoviesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  )
}

export default MoviesNavigation;
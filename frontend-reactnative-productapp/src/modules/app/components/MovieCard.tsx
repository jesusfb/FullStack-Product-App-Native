import { StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';

import { Movie } from '../../../interfaces';
import { MovieStackParaams } from '../../../navigation/MoviesNavigation';

import FadeInImage from './FadeInImage';

type MovieScreenNavigationProp = StackNavigationProp<MovieStackParaams>;

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {

  const navigation = useNavigation<MovieScreenNavigationProp>();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  return (
    <TouchableOpacity
      style={styles.cardImageContent}
      onPress={() => navigation.navigate('MovieDetailScreen', movie)}
    >
      <SharedElement id={`movie.${movie.id}`} style={{ flex: 1 }}>
        <FadeInImage
          uri={uri}
          styleContainer={styles.cardImage}
          style={styles.cardIcon}
        />
      </SharedElement>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardImageContent: {
    width: '33%',
    height: 250,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  cardIcon: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
  }
});

export default MovieCard;
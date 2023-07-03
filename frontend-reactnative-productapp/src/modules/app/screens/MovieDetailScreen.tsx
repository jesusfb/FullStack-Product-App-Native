import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../../../theme/AppTheme';
import FadeInImage from '../components/FadeInImage';
import StarScore from '../components/StarScore';

import { MovieStackParaams } from '../../../navigation/MoviesNavigation';
interface Props extends StackScreenProps<MovieStackParaams> { };

const MovieDetailScreen = ({ navigation, route }: Props) => {

  const movie = route.params!;
  const { top } = useSafeAreaInsets();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.containerDetail}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            left: 20,
            top: top + 20,
          }}
        >
          <Icon
            name="arrow-back-outline"
            color="black"
            size={35}
          />
        </TouchableOpacity>

        <Animatable.View animation="fadeInUp" delay={100} style={styles.detailContainer}>
          <Text style={styles.detailTitle}>{movie.original_title}</Text>
        </Animatable.View>

        <View style={styles.detailPosterContainer}>
          <SharedElement id={`movie.${movie.id}`} style={{ flex: 1 }}>
            <View style={{ ...styles.detailImageContent }}>
              <FadeInImage
                uri={uri}
                styleContainer={styles.detailPoster}
                style={styles.detailIcon}
                size={40}
              />
            </View>
          </SharedElement>
        </View>

        <Animatable.View animation="fadeInUp" delay={100} style={styles.detailContent}>
          <Text style={styles.detailDate}>Fecha de salida: {new Date(movie.release_date).toISOString().slice(0, 10)}</Text>
          <View style={styles.detailsScore}>
            <Text style={styles.detailSubtitles}>Score</Text><StarScore score={(movie.vote_average / 2)} />
          </View>
          <Text style={styles.detailSubtitles}>Descripción</Text>
          <Text style={styles.detailDescription}>{movie.overview}</Text>
          <Text style={styles.detailSubtitles}>Idioma original</Text>
          <Text style={styles.detailDescription}>{movie.original_language}</Text>
        </Animatable.View>
      </ScrollView>
    </View>
  )
}

export default MovieDetailScreen;
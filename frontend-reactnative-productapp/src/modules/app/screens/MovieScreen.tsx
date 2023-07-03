import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { useMovies } from '../../../hooks/useMovies';

import { styles } from '../../../theme/AppTheme';
import MovieCard from '../components/MovieCard';

const MovieScreen = () => {

  const { nowPlaying, getMovies } = useMovies();

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.pageContainer}>
          <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>Movie Api</Text>
            <Text style={styles.pageSubtitle}>
              Se consume el servicio de api de themoviedb.org
            </Text>
          </View>
          <FlatList
            data={nowPlaying}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <MovieCard movie={item} />
            )}
            onEndReachedThreshold={0.4}
          />
        </View>
      </View>
    </View >
  )
}

export default MovieScreen;
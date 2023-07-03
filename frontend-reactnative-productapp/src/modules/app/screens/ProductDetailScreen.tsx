import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';

import { styles } from '../../../theme/AppTheme';
import FadeInImage from '../components/FadeInImage';
import StarScore from '../components/StarScore';

import { ProductStackParaams } from '../../../navigation/ProductsNavigation';
interface Props extends StackScreenProps<ProductStackParaams> { };

const ProductDetailScreen = ({ navigation, route }: Props) => {

  const product = route.params!;
  const { top } = useSafeAreaInsets();

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
          <Text style={styles.detailTitle}>{product.title}</Text>
        </Animatable.View>

        <SharedElement id={`product.${product.id}`} style={{ flex: 1 }}>
          <View style={styles.detailImageContent}>
            <FadeInImage
              uri={product.poster_path}
              styleContainer={styles.detailImage}
              style={styles.detailIcon}
              size={40}
            />
          </View>
        </SharedElement>

        <Animatable.View animation="fadeInUp" delay={100} style={styles.detailContent}>
          <Text style={styles.detailDate}>Fecha de desarrollo: {new Date(product.release_date).toISOString().slice(0, 10)}</Text>
          <View style={styles.detailsScore}>
            <Text style={styles.detailSubtitles}>Score</Text><StarScore score={product.score} />
          </View>
          <Text style={styles.detailSubtitles}>Descripción</Text>
          <Text style={styles.detailDescription}>{product.overview}</Text>
          <Text style={styles.detailSubtitles}>Desarrolladora</Text>
          <Text style={styles.detailDescription}>{product.creator}</Text>
        </Animatable.View>
      </ScrollView>
    </View>
  )
}

export default ProductDetailScreen;
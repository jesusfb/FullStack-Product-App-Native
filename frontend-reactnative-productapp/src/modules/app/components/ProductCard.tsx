import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';

import { Product } from '../../../interfaces';
import { ProductStackParaams } from '../../../navigation/ProductsNavigation';

import FadeInImage from './FadeInImage';

type ProductScreenNavigationProp = StackNavigationProp<ProductStackParaams>;

interface Props {
  index: number;
  product: Product;
  scaleY: any;
}

const ProductCard = ({ index, product, scaleY }: Props) => {

  const navigation = useNavigation<ProductScreenNavigationProp>();

  const scale = scaleY.interpolate({
    inputRange: [-1, 0, (120 * index), (120 * (index + 3))],
    outputRange: [1, 1, 1, 0]
  });

  return (
    <Animated.View style={{ ...styles.card, transform: [{ scale }] }}>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate('ProductDetailScreen', product)}
      >
        <View style={styles.cardImageContent}>
          <SharedElement id={`product.${product.id}`} style={{ flex: 1 }}>
            <FadeInImage
              uri={product.poster_path}
              styleContainer={styles.cardImage}
              style={styles.cardIcon}
            />
          </SharedElement>
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            {product.title} - <Text style={styles.cardDate}>{product.creator}</Text>
          </Text>
          <Text numberOfLines={2}>{product.overview}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 2,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  cardButton: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  cardImageContent: {
    width: '20%',
    height: '100%',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 80,
    position: 'relative'
  },
  cardIcon: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
  },
  cardContent: {
    width: '80%',
    justifyContent: 'center',
    padding: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  cardDate: {
    fontSize: 12,
    color: 'grey'
  }
});

export default ProductCard;
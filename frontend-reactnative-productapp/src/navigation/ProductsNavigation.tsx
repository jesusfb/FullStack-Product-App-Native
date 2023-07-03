import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { Product } from '../interfaces';
import { ProductDetailScreen, HomeScreen } from '../modules/app/screens';

export type ProductStackParaams = {
  HomeScreen: undefined,
  ProductDetailScreen: Product
}

const Stack = createSharedElementStackNavigator<ProductStackParaams>();

const ProductsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  )
}

export default ProductsNavigation;
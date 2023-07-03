import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Navigation from './src/navigation/Navigation';

import { AuthProvider } from './src/context/auth';
import { ProductProvider } from './src/context/products';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ProductProvider>
          <Navigation />
          <Toast />
        </ProductProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;
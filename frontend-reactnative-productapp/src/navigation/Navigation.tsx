import { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../context/auth';

import { LoadingScreen } from '../modules/auth/LoadingScreen';

import { LoginScreen } from '../modules/auth/LoginScreen';
import { RegisterScreen } from '../modules/auth/RegisterScreen';

import AppNavigation from './AppNavigation';

export type RootStackParams = {
  LoginScreen: undefined,
  RegisterScreen: undefined,
  AppScreens: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {

  const { logging, authenticated } = useContext(AuthContext);

  if (logging) return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FDFDFD',
        }
      }}
    >
      {
        (!authenticated) ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name="AppScreens" component={AppNavigation} />
        )
      }
    </Stack.Navigator>
  );
}

export default Navigation;
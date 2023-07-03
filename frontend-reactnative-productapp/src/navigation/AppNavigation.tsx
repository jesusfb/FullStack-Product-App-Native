import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/AppTheme';
import ProductsNavigation from './ProductsNavigation';
import MoviesNavigation from './MoviesNavigation';
import { AccountScreen } from '../modules/app/screens';

type TabStackParams = {
  ProductsNavigation: undefined,
  MoviesNavigation: undefined,
  AccountScreen: undefined,
}

const Tab = createBottomTabNavigator<TabStackParams>();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#EB4C37',
        tabBarStyle: { ...styles.tabBar },
        tabBarIcon: ({ color }) => {
          let tabName: string = '';
          let iconName: string = '';
          switch (route.name) {
            case 'ProductsNavigation':
              tabName = 'Product'
              iconName = 'home-sharp';
              break;
            case 'MoviesNavigation':
              tabName = 'Movie Api'
              iconName = 'videocam';
              break;
            case 'AccountScreen':
              tabName = 'Settings'
              iconName = 'person-sharp';
              break;
          }

          let slectedColorName = (color === '#EB4C37') ? '#EB4C37' : '#8E8E8F';
          let slectedColor = (color === '#EB4C37') ? '#EB4C37' : '#1F1F1F';

          return (
            <View style={styles.tab}>
              <View style={styles.iconTab}>
                <Icon name={iconName} size={25} color={color} />
                <Text style={{ color: slectedColorName, ...styles.iconTabName }}>{tabName}</Text>
              </View>
              <View style={{ ...styles.selectTab, backgroundColor: slectedColor }}></View>
            </View>
          )
        }
      })}
    >
      <Tab.Screen name="ProductsNavigation" component={ProductsNavigation} />
      <Tab.Screen name="MoviesNavigation" component={MoviesNavigation} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigation;
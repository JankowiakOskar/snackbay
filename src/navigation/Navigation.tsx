import { AntDesign } from '@expo/vector-icons';
import type { RootNavigationParams } from '@navigation/types';
import { LocationProvider } from '@providers/LocationContext/LocationContext';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@screens/Home';
import Settings from '@screens/Settings';
import { theme } from '@styles/theme';

const Tab = createBottomTabNavigator<RootNavigationParams>();

const globalHeaderStyles: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: theme.color.dark,
  },
  headerTitleStyle: {
    color: theme.color.primary,
  },
  tabBarStyle: {
    backgroundColor: theme.color.dark,
  },
  tabBarLabelStyle: {
    marginBottom: 3,
  },
  tabBarActiveTintColor: theme.color.primary,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <LocationProvider>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={globalHeaderStyles}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, color }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
              tabBarHideOnKeyboard: true,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ size, color }) => (
                <AntDesign name="setting" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </LocationProvider>
    </NavigationContainer>
  );
};

export default Navigation;

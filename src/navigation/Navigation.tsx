import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import type { RootNavigationParams } from 'navigation/types';
import Home from 'screens/Home';
import Settings from 'screens/Settings';

const Tab = createBottomTabNavigator<RootNavigationParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

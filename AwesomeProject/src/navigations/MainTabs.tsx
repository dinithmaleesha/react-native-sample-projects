import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingSreen from '../screens/SettingScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator()

const icons = {
  home: require('../assets/home.png'),
  settings: require('../assets/settings.png'),
  profile: require('../assets/profile.png'),
};

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
      />
      <Tab.Screen
        name='Details'
        component={DetailScreen}
      />
      <Tab.Screen
        name='Setting'
        component={SettingSreen}
      />
    </Tab.Navigator>
  )
}
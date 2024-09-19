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
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.home}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Details'
        component={DetailScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.profile}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Setting'
        component={SettingSreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.settings}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
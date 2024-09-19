import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import MainTabs from './src/navigations/MainTabs';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer> 
  );
};

export default App;

const styles = StyleSheet.create({});

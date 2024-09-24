import { View, Text, StyleSheet  } from 'react-native'
import React from 'react'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { Fonts } from './src/styles/fonts';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customText: {
    color: 'black',
    fontSize: 30,
    fontFamily: Fonts.NunitoLight
  },
});

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.customText}>Hello, Custom Font!</Text>
    </View>
  );
};

export default App;
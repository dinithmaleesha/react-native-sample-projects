import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { Fonts } from './src/styles/fonts';
import { useForm, Controller } from 'react-hook-form'
import FormInputController from './src/components/controllers/FormInputController';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './src/constants/schemas/authSchema';
import { rs } from './src/styles/responsive';
import UserIconColored from './src/assets/SVG/user-icon';
import BookLogo from './src/assets/SVG/book-logo';

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.customText}>React Native SVG</Text>
      <UserIconColored
        width={200}
        height={200}
      />

      <BookLogo />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customText: {
    color: 'black',
    fontFamily: Fonts.NunitoLight,
    fontSize: rs(30)
  },
});
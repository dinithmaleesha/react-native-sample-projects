import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { Fonts } from './src/styles/fonts';
import { useForm, Controller } from 'react-hook-form'
import FormInputController from './src/components/controllers/FormInputController';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm()

  const submit = (data) => {
    console.log(data);

  }
  return (
    <View style={styles.main}>
      <Text style={styles.customText}>React Hook Form Example in React Native</Text>

      <FormInputController
        control={control}
        name={"username"}
        placeholder={"User Name"}
      />

      <FormInputController
        control={control}
        name={"email"}
        placeholder={"Email"}
      />

      <FormInputController
        control={control}
        name={"password"}
        placeholder={"Password"}
        props={{
          secureTextEntry: true
        }}
      />


      <Button title='Submit' onPress={handleSubmit(submit)} />
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
    fontFamily: Fonts.NunitoLight
  },
});
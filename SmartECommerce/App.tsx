import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { Fonts } from './src/styles/fonts';
import { useForm, Controller } from 'react-hook-form'
import FormInputController from './src/components/controllers/FormInputController';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './src/constants/schemas/authSchema';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const submit = (data) => {
    console.log(data);
    Alert.alert(JSON.stringify(data))
  }
  return (
    <View style={styles.main}>
      <Text style={styles.customText}>React Hook Form Example in React Native</Text>

      <FormInputController
        control={control}
        name={"username"}
        placeholder={"User Name"}
        errors={errors}
      />

      <FormInputController
        control={control}
        name={"email"}
        placeholder={"Email"}
        errors={errors}
      />

      <FormInputController
        control={control}
        name={"password"}
        placeholder={"Password"}
        props={{
          secureTextEntry: true
        }}
        errors={errors}
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
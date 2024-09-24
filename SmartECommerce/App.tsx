import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { Fonts } from './src/styles/fonts';
import { useForm, Controller } from 'react-hook-form'

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

      <Controller
        name="username"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Your Name"
            style={styles.input}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        rules={{required: true, minLength: 5}}
      />
      {errors.username && <Text style={styles.error}>Name is required</Text>}

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Your Email"
            style={styles.input}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
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
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "90%",
    marginTop: 18,
    borderColor: 'gray'
  },
  error: {
    color: 'red'
  }
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormInputController from '../../components/controllers/FormInputController'
import { useForm } from 'react-hook-form'
import { rs, rv } from '../../styles/responsive'
import MainButton from '../../components/buttons/MainButton'

const SigninScreen = () => {
  const { control } = useForm({})
  return (
    <View style={styles.container}>
      <FormInputController
        control={control}
        name='email'
        placeholder='Email'
        props={{
          keyboardType: 'email-address'
        }}
      />
      <FormInputController
        control={control}
        name='password'
        placeholder='Password'
        props={{
          secureTextEntry: true
        }}
      />

      <MainButton
        title='Sing In'
        style={{
          marginTop: rv(10)
        }}
        onPress={function (): {} {
          throw new Error('Function not implemented.')
        }} />
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: rs(20)
  }
})
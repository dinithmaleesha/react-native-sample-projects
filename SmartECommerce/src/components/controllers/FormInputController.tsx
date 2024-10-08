import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { FC } from 'react'
import { Control, Controller, FieldErrors, FieldValue, FieldValues } from 'react-hook-form'
import { rs, rv } from '../../styles/responsive'

interface FormInputControllerProps {
  control: Control<FieldValues>,
  errors?: FieldErrors<FieldValues>
  name: string,
  placeholder: string,
  props?: TextInputProps
}

const FormInputController: FC<FormInputControllerProps> = ({ control, errors, name, placeholder, props }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            {...props}
          />
        )}
      />
      {errors && errors[name] && <Text style={styles.error}>{errors[name]?.message}</Text>}
    </>
  )
}

export default FormInputController

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: rs(8),
    padding: 10,
    width: "100%",
    marginTop: 18,
    borderColor: 'gray',
    height: rv(35)
  },
  error: {
    color: 'red',
    marginTop: 5,
  }
})
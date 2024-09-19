import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const HomeScreen = () => {
  const isLogedIn = useSelector((state: RootState) => state.data.isLoggedIn)
  console.log(isLogedIn);
  
  return (
    <View style={styles.content}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})
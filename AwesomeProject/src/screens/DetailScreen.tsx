import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const DetailScreen = () => {
  const isLoggedIn = useSelector((state: RootState) => state.data.isLoggedIn);

  return (
    <View style={styles.content}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.text}>Hello World..!</Text>
          {/* TODO: */}
        </View>
      ) : (
        <View>
          <Text style={[styles.text, {color:'red'}]}>Please Log in..</Text>
        </View>
      )}
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});
import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logoutAction } from '../store/userActions';

const SettingScreen = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.data.isLoggedIn);

  const handleLogout = () => {
    dispatch(logoutAction())
    console.log('Logged out..!');
    
  }

  return (
    <View style={styles.content}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.text}>Hello World..!</Text>
          <Button title='Log out' onPress={handleLogout} />
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

export default SettingScreen

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
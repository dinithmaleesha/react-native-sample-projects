import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { loginAction } from '../store/userActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.data.isLoggedIn);

  const handleLogin = () => {
    dispatch(loginAction());
    console.log('Logged In..!');
  };

  return (
    <View style={styles.content}>
      {isLoggedIn ? (
        <Text style={styles.text}>Hello World..!</Text>
      ) : (
        <View>
          <Text style={[styles.text, { color: 'red' }]}>You are not Logged In</Text>
          <Button title='Log in' onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

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
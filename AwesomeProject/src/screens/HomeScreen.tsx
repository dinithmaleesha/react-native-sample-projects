import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { login } from '../store/userReducer';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoggedIn = useSelector((state: RootState) => state.data.isLoggedIn);

  const duck = useSelector((state: RootState) => state.data.ducks )

  const handleLoginClick = () => {
    console.log('Logged In..!');
    dispatch(login());
  };

  return (
    <View style={styles.content}>
      {isLoggedIn ? (
        <Text style={styles.text}>Hello World..!</Text>
      ) : (
        <View>
          <Text style={[styles.text, { color: 'red' }]}>You are not Logged In</Text>
          <Button title='Log in' onPress={handleLoginClick} />
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
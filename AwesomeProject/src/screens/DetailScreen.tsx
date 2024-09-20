import { View, Text, StyleSheet, Button, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { getDucks } from '../store/userActions';

const DetailScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.data.isLoggedIn);
  const isLoading = useSelector((state: RootState) => state.data.loading);
  const { message, url } = useSelector((state: RootState) => state.data.ducks);

  const handleDuck = () => {
    dispatch(getDucks());
  };

  return (
    <View style={styles.content}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.text}>Click Here to get ducks,</Text>
          <Button title="Click Here.." onPress={handleDuck} />
          {isLoading ? (
            <ActivityIndicator size="large" color="blue" style={styles.loading} />
          ) : url ? (
            <View>
              <Image
                source={{ uri: url }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text>{message}</Text>
            </View>
          ) : (
            <Text>No duck image available</Text>
          )}
        </View>
      ) : (
        <View>
          <Text style={[styles.text, { color: 'red' }]}>Please Log in..</Text>
        </View>
      )}
    </View>
  );
};

export default DetailScreen;

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
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  loading: {
    marginTop: 20,
  },
});

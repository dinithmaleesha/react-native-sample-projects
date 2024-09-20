import { View, Text, StyleSheet, Button, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getDucks } from '../store/userActions';

const DetailScreen = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.data.isLoggedIn);
  const {duckUrl} = useSelector((state: RootState) => state.data.ducks); // Select the duck URL

  const handleDuck = () => {
    // dispatch(getDucks());
  }

  return (
    <View style={styles.content}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.text}>Click Here to get ducks,,</Text>
          <Button title='Click Here..' onPress={handleDuck} />
          {duckUrl ? (
            <Image
              source={{ uri: duckUrl }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Text>No duck image available</Text>
          )}
        </View>
      ) : (
        <View>
          <Text style={[styles.text, {color:'red'}]}>Please Log in..</Text>
        </View>
      )}
    </View>
  );
}

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
});

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';
import { Colors } from '../../styles/colors';

interface MainButtonProps {
  onPress: () => {},
  title: String,
  loading?: boolean,
  disable?: boolean,
  style?: ViewStyle | ViewStyle[]
}

const MainButton : FC<MainButtonProps> = ({ onPress, title, loading, disable, style }) => {
  return (
    <TouchableOpacity
      style={[styles.cont, disable && { opacity: 0.5 }, style]}
      onPress={() => {
        onPress && onPress();
      }}
      disabled={disable}>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={styles.titleText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  cont: {
    height: 48,
    width: '100%',
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
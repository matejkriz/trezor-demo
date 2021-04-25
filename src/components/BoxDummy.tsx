import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: 400,
    margin: 16,
    borderRadius: 4,
  },
});

export const BoxDummy: React.FunctionComponent = () => {
  return <View style={styles.container} />;
};

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Title } from './Title';
import { Body } from './Body';

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
});

export const Header: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Body />
    </View>
  );
};

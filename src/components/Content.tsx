import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { BoxDummy } from './BoxDummy';
import { colors } from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
});

export const Content: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BoxDummy />
        <BoxDummy />
        <BoxDummy />
        <BoxDummy />
      </ScrollView>
    </View>
  );
};

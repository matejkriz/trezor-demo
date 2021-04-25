import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import { colors, layout, typography, size } from '../theme';

const iconSize = size(13);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayLighter,
    paddingVertical: size(18),
    paddingHorizontal: layout.appHorizontalPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  label: {
    color: colors.grayDark,
    ...typography,
  },
  icon: {
    margin: 8,
    width: iconSize,
    height: iconSize,
  },
});

export const Title: React.FunctionComponent = () => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.icon} source={require('../assets/btc.png')} />
      <Text style={styles.label}>Moje Bitcoiny</Text>
    </View>
  );
};

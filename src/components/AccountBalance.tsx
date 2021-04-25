import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors, typography, FontVariant, size } from '../theme';

const styles = StyleSheet.create({
  label: {
    color: colors.grayDark,
    ...typography,
    fontFamily: FontVariant.bold,
    fontSize: size(28),
    lineHeight: size(34),
  },
});

export const AccountBalance: React.FunctionComponent = () => {
  return <Text style={styles.label}>0.0987364 BTC</Text>;
};

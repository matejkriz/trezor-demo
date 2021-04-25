import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors, typography, FontVariant } from '../theme';

const styles = StyleSheet.create({
  text: {
    color: colors.grayLight,
    ...typography,
    fontFamily: FontVariant.medium,
  },
});

export const BalanceConverted: React.FunctionComponent = () => {
  return <Text style={styles.text}>≈ 26 366,53 Kč</Text>;
};

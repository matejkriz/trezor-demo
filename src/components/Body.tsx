import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, layout, size } from '../theme';
import { AccountBalance } from './AccountBalance';
import { BalanceConverted } from './BalanceConverted';
import { ExchangeRate } from './ExchangeRate';
import { ActionButtons } from './ActionButtons';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.grayLighter,
    paddingHorizontal: layout.appHorizontalPadding,
    paddingTop: size(20),
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.grayLighter,
    paddingVertical: size(4),
  },
});

export const Body: React.FunctionComponent = () => {
  return (
    <View style={styles.wrapper}>
      <AccountBalance />
      <View style={styles.info}>
        <BalanceConverted />
        <ExchangeRate />
      </View>
      <ActionButtons />
    </View>
  );
};

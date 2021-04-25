import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Button, ButtonProps } from './Button';

import { size } from '../theme';

const actionButtons: Array<ButtonProps> = [
  {
    label: 'Send',
    onPress: () => {},
    icon: require('../assets/Icon.png'),
  },
  {
    label: 'Receive',
    onPress: () => {},
    icon: require('../assets/Receive.png'),
  },
  {
    label: 'Trade',
    onPress: () => {},
    icon: require('../assets/Trade.png'),
  },
  {
    label: 'Account Settings',
    onPress: () => {},
    icon: require('../assets/Settings.png'),
    disabled: true,
  },
];

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: size(18),
  },
});

export const ActionButtons: React.FunctionComponent = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {actionButtons.map(({ label, onPress, icon, disabled }) => (
          <Button
            onPress={onPress}
            label={label}
            accessibilityLabel={label}
            key={label}
            icon={icon}
            disabled={disabled}
          />
        ))}
      </ScrollView>
    </View>
  );
};

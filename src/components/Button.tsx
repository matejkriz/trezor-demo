import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';

import { colors, typography, size } from '../theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  label: {
    color: colors.grayDark,
    ...typography,
    fontSize: size(14),
    lineHeight: size(22),
    fontWeight: '600',
  },
  disabled: {
    color: colors.grayLight,
  },
  icon: {
    width: size(16),
    height: size(16),
    margin: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: colors.gray,
    paddingVertical: size(7),
    paddingHorizontal: size(12),
    marginEnd: 12,
  },
});

export interface ButtonProps {
  accessibilityLabel?: string;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  icon?: ImageSourcePropType;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  accessibilityLabel,
  label,
  onPress,
  disabled = false,
  icon,
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        onPress={onPress}
        disabled={disabled}>
        <View style={styles.button}>
          {icon && <Image style={styles.icon} source={icon} />}
          <Text style={[styles.label, ...(disabled ? [styles.disabled] : [])]}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

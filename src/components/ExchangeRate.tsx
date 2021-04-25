import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { colors, typography } from '../theme';

const styles = StyleSheet.create({
  text: {
    color: colors.green,
    ...typography,
    fontWeight: '600',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export const ExchangeRate: React.FunctionComponent = () => {
  return (
    <Text style={styles.text}>
      <Image
        style={styles.icon}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIMSURBVHgB7dlBbtNAFAbg/9mOmrCyaA/gG5AskBpW4QZmgwQbygngBuUGPULYQIFNygnIDiQW7Q3Inlbyqk3UxlNP3KqLKlWTzsyzqv9bJrES/Zn33owNEBERERERERERERFRIwgaYjBM02m7lYspi43ZfDx+XxRogEYEtL2fZiLxr+rnZPUrZmLM/OWfN8UEytQDsitn1okPb8K5ZiYbZ/Oe9kqKoGzWSXZvh2NJVr+nS3UFbe9v7ojI8M4PlebV77cnB1CiFtDtvrNUYcxFT6sfqZVYhGR0j3CsVCQZQolKQC++b+0aQXeFSwb2GigIXmLPv6TdJE4OsQZjUI3+4zECCrqCbN9J4niENYmYod0WIKDAJRZ/umffWaIa/U/C9qNgAfV/PP1QjfR3eCiDvP9t6yMCCdKDrka63S27Ko9goz/ICrra77jsHWmE1tq9bBXeA6rHs2RwzIjpVqW2B8+8llj/62aOSLz+075Hv7eAVjhKPJDfWyPeSkwQ7/kPZ/FNmc+jiJeAFn1HJEc4A1+j33mJ1aWV/IOCi0h6f1//P4JDTleQPQbUfUdHUpYj10cRpwFN23Eepu8ss7gLuQOHXPegAZQJzDM45DSgavPmtP7XIYIxHHIaUOes/Gz3JVAiBket0/lPOORlo2hvxofvRTJpT88PmvLAkYiIiIiIiIiIiIiIiIgekUvBeJTXQj7GiQAAAABJRU5ErkJggg==',
        }}
      />{' '}
      212 123,55 Kč
    </Text>
  );
};

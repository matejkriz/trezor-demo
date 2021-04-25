import { PixelRatio, TextStyle } from 'react-native';

const scale = PixelRatio.get();
const rate = 0.2;

export const size = (defaultSize: number) => {
  const ratio = (scale - 1) * rate + 1;
  return Math.round(defaultSize * ratio);
};

export const colors = {
  gray: '#f4f4f4',
  grayLight: '#808080',
  grayLighter: '#fcfcfc',
  grayDark: '#404040',
  green: '#279503',
  white: '#ffffff',
};

export const typography: TextStyle = {
  fontSize: size(16),
  lineHeight: size(24),
  fontFamily: undefined,
  fontWeight: 'normal',
};

export const layout = {
  appHorizontalPadding: size(16),
};

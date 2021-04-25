import { Dimensions, TextStyle } from 'react-native';

const { width, height } = Dimensions.get('screen');
const scale = Math.min(width, height) / 375;
const rate = 0.5;

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

export enum FontVariant {
  black = 'NotoSansJP-Black',
  bold = 'NotoSansJP-Bold',
  light = 'NotoSansJP-Light',
  medium = 'NotoSansJP-Medium',
  regular = 'NotoSansJP-Regular',
  thin = 'NotoSansJP-Thin',
}

export const typography: TextStyle = {
  fontSize: size(16),
  lineHeight: size(24),
  fontFamily: FontVariant.regular,
};

export const layout = {
  appHorizontalPadding: size(16),
};

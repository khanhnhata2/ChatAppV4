import {dimensions, padding} from './base';
import {Platform, StyleSheet} from 'react-native';
import _color from './_color';

export const panelStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimensions.fullWidth,
    paddingHorizontal: Platform.OS ? padding.ios : padding.android,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: _color.MAIN_BACKGROUND,
  },
});

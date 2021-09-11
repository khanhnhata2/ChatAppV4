import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fonts from './_font';

const textStyles = StyleSheet.create({
  title: {
    fontFamily: fonts.TITLE_BOLD,
    fontSize: 22,
    lineHeight: 27,
  },
  title_bold: {
    fontFamily: fonts.TITLE_BOLD,
    fontSize: 22,
    lineHeight: 27,
  },
  title_bold_18: {
    fontFamily: fonts.TITLE_BOLD,
    fontSize: 18,
    lineHeight: 25,
  },
  title_extra_bold: {
    fontFamily: fonts.TITLE_EXTRA_BOLD,
    fontSize: 24,
    lineHeight: 30,
  },
  title_extra_bold_22: {
    fontFamily: fonts.TITLE_EXTRA_BOLD,
    fontSize: 22,
    lineHeight: 27,
  },
  headline: {fontFamily: fonts.HEADLINE, fontSize: 16, lineHeight: 25},
  headline_20: {
    fontFamily: fonts.HEADLINE_BOLD,
    fontSize: 20,
    lineHeight: 32.6,
  },
  headline_22: {
    fontFamily: fonts.HEADLINE_BOLD,
    fontSize: 22,
    lineHeight: 36.6,
  },
  headline_bold: {
    fontFamily: fonts.HEADLINE_BOLD,
    fontSize: 18,
    marginBottom: 8,
    lineHeight: 24.6,
  },
  headline_extra_bold: {
    fontFamily: fonts.HEADLINE_EXTRA_BOLD,
    fontSize: 18,
    lineHeight: 22,
  },
  sub_headline: {fontFamily: fonts.SUB_HEADLINE, fontSize: 14},
  sub_headline_14: {fontFamily: fonts.SUB_HEADLINE, fontSize: 14},
  sub_headline_12: {fontFamily: fonts.SUB_HEADLINE, fontSize: 12},
  sub_headline_16: {
    fontFamily: fonts.SUB_HEADLINE,
    fontSize: 16,
    lineHeight: 22,
  },
  body: {fontFamily: fonts.BODY, fontSize: 14, lineHeight: 17},
  body_bold: {
    fontFamily: fonts.BODY_BOLD,
    fontSize: 14,
    lineHeight: 17,
  },
  body_bold_14: {
    fontFamily: fonts.BODY_BOLD,
    fontSize: 14,
    lineHeight: 16,
  },
  body_bold_16_noLineHeight: {
    fontFamily: fonts.BODY_BOLD,
    fontSize: 16,
    lineHeight: 18,
  },
  body_bold_16: {
    fontFamily: fonts.BODY_BOLD,
    fontSize: 16,
    lineHeight: 18,
  },
  body_bold_18: {
    fontFamily: fonts.BODY_BOLD,
    fontSize: 18,
  },
  body_bold_22: {
    fontFamily: fonts.BODY_BOLD,
    fontSize: 22,
    lineHeight: 27,
  },
  button: {fontFamily: fonts.BUTTON, fontSize: 16, lineHeight: 22},
  button_extra_bold: {
    fontFamily: fonts.BUTTON_EXTRA_BOLD,
    fontSize: 16,
    lineHeight: 22,
  },
});
export default textStyles;

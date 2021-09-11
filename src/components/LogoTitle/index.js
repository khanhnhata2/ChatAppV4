import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import textStyles from './../../../styles/textStyles';
export default function LogoTitle(props) {
  return (
    <View style={styles.headerStyle}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 60, height: 55}}
      />
      <Text style={textStyles.headline_20}>{'ChatApp '}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

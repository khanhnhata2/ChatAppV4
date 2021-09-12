import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import textStyles from './../../../styles/textStyles';
export default function LogoTitle(props) {
  return (
    <View style={styles.headerStyle}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 70, height: 70}}
      />
      {/* <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 60, height: 55}}
      />
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 60, height: 55}}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

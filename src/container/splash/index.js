import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Image, StyleSheet, StatusBar} from 'react-native';
import _color from '../../../styles/_color';
import router from '../../../router';
import {useSelector} from 'react-redux';
export default function SplashScreen({navigation}) {
  // const userName = useSelector(state => state.auth.userName);
  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     clearTimeout(timeOut);
  //     if (userName != null) {
  //       navigation.navigate(router.mainStack);
  //     } else {
  //       navigation.navigate(router.authStack);
  //     }
  //   }, 2000);
  // }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.screenStyle}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _color.BACKGROUND,
  },
  logoStyle: {
    width: 120,
    height: 120,
  },
});

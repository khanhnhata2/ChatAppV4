import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import _color from '../../../../styles/_color';
import {dimensions} from '../../../../styles/base';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../../redux/slice/authSlice';
import router from '../../../../router';
export default function ProfileScreen(props) {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={styles.screenStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
          <View style={styles.inner}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logoStyle}
            />
            <TextInput placeholder="Username" style={styles.textInput} />
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => {
                // dispatch(saveUser(null));
                auth()
                  .signOut()
                  .then(() => console.log('User signed out!'));
                // props.navigation.reset({
                //   index: 0,
                //   routes: [{name: router.authStack}],
                // });
              }}>
              <Text style={{color: 'white'}}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: 'gray',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 120,
    height: 120,
  },
  textInput: {
    width: dimensions.fullWidth * 0.4,
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 0.8,
    marginBottom: 36,
  },
  btnContainer: {
    width: dimensions.fullWidth * 0.3,
    borderRadius: 15,
    height: 40,
    backgroundColor: 'black',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

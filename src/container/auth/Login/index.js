import React, {useState} from 'react';
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
import _color from '../../../../styles/_color';
import {dimensions} from '../../../../styles/base';
import {useDispatch} from 'react-redux';
import {saveUser, saveUser2} from '../../../redux/slice/authSlice';
import router from '../../../../router';
import auth from '@react-native-firebase/auth';
export default function LoginScreen(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        var user = userCredential.user;
        console.log('day la user', user);
      })
      .catch(error => {
        alert(error.message);
      });
  };
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
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={[styles.btnContainer, {backgroundColor: 'black'}]}
              onPress={() => {
                login();
              }}>
              <Text style={{color: 'white'}}>{'Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnContainer, {backgroundColor: 'white'}]}
              onPress={() => {
                props.navigation.navigate(router.register);
              }}>
              <Text style={{color: 'black'}}>{'Register'}</Text>
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
    backgroundColor: _color.BACKGROUND,
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
    marginBottom: 25,
  },
  btnContainer: {
    width: dimensions.fullWidth * 0.3,
    borderRadius: 15,
    height: 40,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

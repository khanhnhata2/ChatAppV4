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
import _color from '../../../styles/_color';
import {dimensions} from '../../../styles/base';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../redux/slice/authSlice';
import router from '../../../router';
export default function LoginScreen(props) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={styles.screenStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
          <View style={styles.inner}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logoStyle}
            />
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              onChangeText={setUserName}
            />
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => {
                dispatch(saveUser(userName));
                // props.navigation.navigate(router.mainStack);
              }}>
              <Text style={{color: 'white'}}>Tiếp tục</Text>
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

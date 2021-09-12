import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import _color from '../../../../styles/_color';
import {dimensions} from '../../../../styles/base';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../../redux/slice/authSlice';
import router from '../../../../router';
// import {auth} from '../../../../firebase';
import auth from '@react-native-firebase/auth';
import textStyles from '../../../../styles/textStyles';
export default function RegisterScreen(props) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log('userName in Register', userName);
        authUser.user.updateProfile({
          displayName: userName,
        });
        console.log('day la register', authUser);
        // dispatch(saveUser(userName));
      })
      .catch(error => alert(error.message));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.screenStyle}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
          <View style={styles.inner}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logoStyle}
            />
            <TextInput
              placeholder="Username"
              style={[styles.textInput, textStyles.sub_headline_16]}
              onChangeText={setUserName}
            />
            <TextInput
              placeholder="Email"
              style={[styles.textInput, textStyles.sub_headline_16]}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              style={[styles.textInput, textStyles.sub_headline_16]}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <TextInput
              placeholder="Confirm password"
              style={[styles.textInput, textStyles.sub_headline_16]}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={[styles.btnContainer, {backgroundColor: 'black'}]}
              onPress={() => {
                register();
              }}>
              <Text style={[textStyles.button, {color: 'white'}]}>
                {'Register'}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
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
    width: dimensions.fullWidth * 0.5,
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 0.8,
    marginBottom: 25,
  },
  btnContainer: {
    width: dimensions.fullWidth * 0.3,
    borderRadius: 15,
    height: 45,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

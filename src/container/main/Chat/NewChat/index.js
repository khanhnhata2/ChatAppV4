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
import {panelStyles} from '../../../../../styles';
import _color from '../../../../../styles/_color';
import {dimensions} from './../../../../../styles/base';
import app from '@react-native-firebase/';
export default function NewChatScreen() {
  const [receiver, setReceiver] = useState('');
  // const userName = useSelector(state => state.auth.userName);
  // const user = useSelector(state => state.auth.user);
  // console.log('day la user2', user);
  // const createMessage = () => {
  //   app.db
  // };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={panelStyles.container}>
        <View>
          <TextInput
            placeholder={' Đến: '}
            style={styles.searchBar}
            onChangeText={setReceiver}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>Tạo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    width: dimensions.fullWidth * 0.3,
    backgroundColor: _color.BACKGROUND,
    borderRadius: 20,
    height: 50,
  },
});

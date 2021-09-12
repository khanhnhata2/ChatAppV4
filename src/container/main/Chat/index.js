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
import {dimensions} from '../../../../styles/base';
import {useSelector} from 'react-redux';
import ChatItem from '../../../components/ChatItem';
import {panelStyles} from '../../../../styles';
export default function ChatScreen() {
  // const userName = useSelector(state => state.auth.userName);
  // const user = useSelector(state => state.auth.user);
  // console.log('day la user2', user);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={panelStyles.container}>
        <View>
          <TextInput placeholder={'Tìm kiếm'} style={styles.searchBar} />
        </View>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
  },
});

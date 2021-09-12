import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewChatScreen from '../../../container/main/Chat/NewChat';
import ChatScreen from '../../../container/main/Chat';
import router from '../../../../router';
import LogoTitle from '../../../components/LogoTitle';
import _color from '../../../../styles/_color';
const Chat = createNativeStackNavigator();
export default function ChatStack(props) {
  return (
    <Chat.Navigator>
      <Chat.Screen
        name={router.chat}
        component={ChatScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: _color.BACKGROUND,
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 5}}
                onPress={() => {
                  props.navigation.navigate(router.newChat);
                }}>
                <Ionicons name={'add-outline'} size={28} color={'white'} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Chat.Screen
        name={router.newChat}
        component={NewChatScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: _color.BACKGROUND,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Chat.Navigator>
  );
}

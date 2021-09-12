import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../container/auth/Login';
import RegisterScreen from '../../container/auth/Register';
import router from '../../../router';
import _color from '../../../styles/_color';
const AuthStack = createNativeStackNavigator();
export default function authStack() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={router.login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={router.register}
        component={RegisterScreen}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: _color.BACKGROUND},
        }}
      />
    </AuthStack.Navigator>
  );
}

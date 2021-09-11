import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../container/auth';
import router from '../../../router';
const AuthStack = createNativeStackNavigator();
export default function authStack() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={router.login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

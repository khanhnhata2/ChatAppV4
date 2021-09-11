import React from 'react';
import {Image, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../../container/main/Chat';
import ProfileScreen from '../../container/main/Profile';
import _color from '../../../styles/_color';
import router from '../../../router';

const Tab = createBottomTabNavigator();
export default function authStack() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarVisible: true,
      //   headerShown: false,
      //   tabBarStyle: {
      //     backgroundColor: _color.BACKGROUND,
      //     height: 80,
      //   },
      // }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === router.chat) {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === router.profile) {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          fontFamily: 'GMVURWGeometric-Bold',
          fontSize: 14,
        },
        tabBarInactiveTintColor: 'gray',
        tabBarVisible: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: _color.BACKGROUND,
          height: 80,
        },
      })}>
      <Tab.Screen
        name={router.chat}
        component={ChatScreen}
        // options={{
        //   tabBarButton: props => (
        //     <Image
        //       label="chat"
        //       labelSelection="chatSelection"
        //       name={router.chat}
        //       {...props}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name={router.profile}
        component={ProfileScreen}
        // options={{
        //   tabBarButton: props => (
        //     <TabComponent
        //       label="profile"
        //       labelSelection="profileSelection"
        //       name={router.profile}
        //       {...props}
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}

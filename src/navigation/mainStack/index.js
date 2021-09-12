import React from 'react';
import {Image, Platform, TouchableOpacity, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../../container/main/Chat';
import ProfileScreen from '../../container/main/Profile';
import _color from '../../../styles/_color';
import router from '../../../router';
import LogoTitle from '../../components/LogoTitle';
import ChatStack from './ChatStack';

const Tab = createBottomTabNavigator();
export default function mainStack(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === router.chatStack) {
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
        tabBarInactiveTintColor: '#8c8c8c',
        tabBarVisible: true,
        tabBarStyle: {
          backgroundColor: _color.BACKGROUND,
          height: 80,
        },
        headerShown: false,
        // headerTitle: props => <LogoTitle {...props} />,
        // headerStyle: {
        //   backgroundColor: _color.BACKGROUND,
        // },
        // headerTitleAlign: 'center',
      })}>
      <Tab.Screen name={router.chatStack} component={ChatStack} />
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

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../container/splash';
import router from '../../router';
import authStack from './authStack/';
import mainStack from './mainStack';
import LogoTitle from '../components/LogoTitle';
import _color from '../../styles/_color';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  const [loading, setLoading] = useState(false);
  const userName = useSelector(state => state.auth.userName);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(true);
      clearTimeout(timeOut);
    }, 2000);
  }, []);
  const processNavigation = () => {
    console.log('day la userName', userName);
    if (!loading) {
      console.log('vô splash');
      return (
        <Stack.Screen
          name={router.splash}
          component={SplashScreen}
          options={{headerShown: false}}
        />
      );
    } else {
      if (userName === '' || userName === null) {
        return (
          <Stack.Screen
            name={router.authStack}
            component={authStack}
            options={{headerShown: false}}
          />
        );
      } else {
        return (
          <Stack.Screen
            name={router.mainStack}
            component={mainStack}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: _color.BACKGROUND},
            }}
          />
        );
      }
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>{processNavigation()}</Stack.Navigator>
    </NavigationContainer>
  );
}

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../container/splash';
import router from '../../router';
import authStack from './authStack/';
import mainStack from './mainStack';
import LogoTitle from '../components/LogoTitle';
import _color from '../../styles/_color';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {saveUser} from '../redux/slice/authSlice';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);

  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    dispatch(saveUser(user));
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(true);
      clearTimeout(timeOut);
    }, 2000);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  const processNavigation = () => {
    console.log('day la userNameFirebase', user);
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
      // if (userName === '' || userName === null) {
      if (!user) {
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
              headerShown: false,
              // headerTitle: props => <LogoTitle {...props} />,
              // headerStyle: {
              //   backgroundColor: _color.BACKGROUND,
              // },
              // headerTitleAlign: 'center',
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

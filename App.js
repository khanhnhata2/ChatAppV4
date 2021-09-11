import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {persistor, store} from './src/redux/store';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar
              translucent={true}
              backgroundColor={'transparent'}
              barStyle={'dark-content'}
            />
            <Navigation />
            {/* <LinearGradient
          style={{flex: 1}}
          start={{x: 0.0, y: 0.1}}
          end={{x: 0.5, y: 1.0}}
          colors={['#231557', '#44107A', '#FF1361', '#FFF800']}>

        </LinearGradient> */}
            {/* <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0.8, 0.8, 1]}
          colors={['red', 'blue', 'green']}
          style={{height: 100}}>
          <Text  style={{height: 100}}>Sign in with Facebook</Text>
        </LinearGradient> */}
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

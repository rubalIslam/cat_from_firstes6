import React, { useEffect, useState } from 'react';
import { Text } from "react-native";

import { AsyncStorage, YellowBox } from 'react-native';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { DrawerNavigator, IntroStackScreen } from './StoneNavigator';
import App from '../../App';
import { useDispatch } from 'react-redux';
//import { Logout } from '../reducers';

//Modalize
import { Host } from 'react-native-portalize';

//Deep Link
import { urlRedirect } from '../utils/Tools';
import * as Linking from 'expo-linking';

YellowBox.ignoreWarnings(['Setting a timer']);

const AppNavigator = () => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  const isFirstOpen = useSelector((state) => 
    state.store.isFirstOpen);
  useEffect(() => {
    // listen for new url events coming from Expo
    Linking.addEventListener(
      'url',
      (event) => {
        urlRedirect(event.url);
      },
      [urlRedirect],
    );
    Linking.getInitialURL().then(urlRedirect);
    Linking.removeEventListener(
      'url',
      (event) => {
        urlRedirect(event.url);
      },
      [urlRedirect],
    );
  }, [urlRedirect]);

  useEffect(() => {
    const isFirstTime = async () => {
      const firstOpen = await AsyncStorage.getItem('isFirstTime');
      setValue(firstOpen);
    };
    isFirstTime();
    const autoLogout = async () => {
      const getUser = await AsyncStorage.getItem('user');
      if (getUser) {
        const user = await JSON.parse(getUser);
        if (user.data.expireTime - Date.now() < 0) {
          //dispatch(Logout());
          console.log("logout")
        }
      }
      return;
    };
    autoLogout();
  }, []);
  useEffect(() => {
    const autoLogout = async () => {
      const getUser = await AsyncStorage.getItem('user');
      if (getUser) {
        const user = await JSON.parse(getUser);
        if (user.data.expireTime - Date.now() < 0) {
          //dispatch(Logout());
          console.log("logout")
        }
      }
      return;
    };
    autoLogout();
  }, []);
  
 //const isFirstOpen = false;
 //const value = "yes";
  return (
    <NavigationContainer ref={navigationRef}>
      <Host>
        <Text>AppNavigator</Text>
        { /*isFirstOpen === true && <IntroStackScreen />*/}
        {/* isFirstOpen === false && <DrawerNavigator />*/}
        
        {(isFirstOpen || value !== null) && <DrawerNavigator />}
        {!isFirstOpen && value === null && <IntroStackScreen />}
      </Host>
    </NavigationContainer>
  );
};
export default AppNavigator;
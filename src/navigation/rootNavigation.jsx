import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoggedInNavigation from './loggedInNavigation';
import { View, ActivityIndicator } from 'react-native';
import {auth} from '../firebase';
import { AuthContext } from '../config/AuthContext';

// const mainStack = createNativeStackNavigator()
const navigation = () =>{

const { user, setUser } = useContext(AuthContext);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
      try {
        await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

    return(
        <NavigationContainer>
           
             {user ? <LoggedInNavigation /> : <AuthStack />}
           
        </NavigationContainer>
    )
}

export default navigation;
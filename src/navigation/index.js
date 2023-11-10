import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AppStack from './app';
import AuthStack from './auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/AuthFlow/Splash';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(false);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='App' component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

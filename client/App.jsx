import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen.jsx';
import SignUp from './components/SignUp.jsx';
import BottomTabNav from './components/BottomTabNav.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Home" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Form from "./src/screens/Form";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './src/routes/tab.routes';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Form" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={TabRoutes} /> 
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

)};
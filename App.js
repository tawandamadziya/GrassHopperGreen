// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import BeforeAfterPhotosScreen from './src/BeforeAfterScreen';
import BiometricSignInScreen from './src/BiometrcisScreen';
import AttendanceScreen from './src/AttendanceScreen';
import ProjectDetailsScreen from './src/ProjectDetailsScreen';
import ProjectListScreen from './src/ProjectListScreen';

const Stack=createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}} >
        <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='Signup' component={SignupScreen}></Stack.Screen>
        <Stack.Screen name='ProjectDetails' component={ProjectDetailsScreen}></Stack.Screen>
        <Stack.Screen name='ProjectList' component={ProjectListScreen}></Stack.Screen>
        <Stack.Screen name='Attendance' component={AttendanceScreen}></Stack.Screen>
        <Stack.Screen name='Biometrics' component={BiometricSignInScreen}></Stack.Screen>
        <Stack.Screen name='Upload' component={BeforeAfterPhotosScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
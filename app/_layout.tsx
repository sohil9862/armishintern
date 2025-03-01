import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './(tabs)/welcome';
import DashboardScreen from './(tabs)/dashboard';
import SignupScreen from './(tabs)/signup';
import LoginScreen from './(tabs)/login';

type RootStackParamList = {
  Welcome: undefined;
  Dashboard: undefined;
  Signup: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppLayout: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ title: 'Dashboard' }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ title: 'Sign Up' }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }} 
      />
    </Stack.Navigator>
  );
};

export default AppLayout;

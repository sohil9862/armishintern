import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './(tabs)/welcome';
import DashboardScreen from './(tabs)/Dashboard';
import PhoneNumberScreen from './(tabs)/PhoneNumberScreen';  
import ProfileScreen from './(tabs)/ProfileScreen';  

type RootStackParamList = {
  Welcome: undefined;
  Dashboard: undefined;
  PhoneNumber: undefined;  // Add PhoneNumberScreen
  Profile: undefined;  // Add ProfileScreen
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
        name="PhoneNumber" 
        component={PhoneNumberScreen} 
        options={{ title: 'Phone Number' }}  // Title for PhoneNumberScreen
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }}  // Title for ProfileScreen
      />
    </Stack.Navigator>
  );
};

export default AppLayout;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './(tabs)/welcome';
import DashboardScreen from './(tabs)/Dashboard';
import PhoneNumberScreen from './(tabs)/PhoneNumberScreen';  
import ProfileScreen from './(tabs)/ProfileScreen';  
import SpecialServicesScreen from './(tabs)/SpecialServicesScreen';
import AllCategoriesScreen from './(tabs)/AllCategoriesScreen';
import TeamMemberScreen from './(tabs)/TeamMemberScreen';
import TeamMemberDetailScreen from './(tabs)/TeamMemberDetailScreen';
import ServiceDetailsScreen from './(tabs)/ServiceDetailsScreen';
import CategoryDetailScreen from './(tabs)/CategoryDetailScreen';
import SearchScreen from './(tabs)/SearchScreen';
import BookingScreen from './(tabs)/BookingScreen';
import NotificationScreen from './(tabs)/notification';
import EditProfileScreen from './(tabs)/EditProfileScreen';


type RootStackParamList = {
  Welcome: undefined;
  Dashboard: undefined;
  PhoneNumber: undefined;  
  Profile: undefined; 
  SpecialServicesScreen: undefined; 
  AllCategoriesScreen: undefined;
  TeamMemberScreen: undefined;
  TeamMemberDetailScreen: undefined;
  ServiceDetailsScreen: undefined;
  CategoryDetailScreen: undefined;
  SearchScreen: undefined;
  BookingScreen: undefined;
  NotificationScreen: undefined;
  EditProfileScreen: undefined;
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
        name="EditProfileScreen" 
        component={EditProfileScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="notification" 
        component={NotificationScreen} 
        options={{ title: 'notification' }} 
      />
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ title: 'Dashboard' }} 
      />
      <Stack.Screen 
        name="PhoneNumber" 
        component={PhoneNumberScreen} 
        options={{ title: 'Phone Number' }}  
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }}  
      />
      <Stack.Screen 
        name="SpecialServicesScreen" 
        component={SpecialServicesScreen} 
        options={{ title: 'SpecialServicesScreen' }}  
      />
      <Stack.Screen 
        name="AllCategoriesScreen" 
        component={AllCategoriesScreen} 
        options={{ title: 'AllCategoriesScreen' }}  
      />
      <Stack.Screen 
        name="TeamMemberScreen" 
        component={TeamMemberScreen} 
        options={{ title: 'TeamMemberScreen' }}  
      />
      <Stack.Screen 
        name="TeamMemberDetailScreen" 
        component={TeamMemberDetailScreen} 
        options={{ title: 'TeamMemberDetailScreen' }}  
      />
      <Stack.Screen 
        name="ServiceDetailsScreen" 
        component={ServiceDetailsScreen} 
        options={{ title: 'ServiceDetailsScreen' }}  
      />
      <Stack.Screen 
        name="CategoryDetailScreen" 
        component={CategoryDetailScreen} 
        options={{ title: 'CategoryDetailScreen' }}  
      />
      <Stack.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{ title: 'SearchScreen' }}  
      />
      <Stack.Screen 
        name="BookingScreen" 
        component={BookingScreen} 
        options={{ title: 'BookingScreen' }}  
      />
    </Stack.Navigator>
  );
};

export default AppLayout;

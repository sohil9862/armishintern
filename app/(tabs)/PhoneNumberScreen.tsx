import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  PhoneNumber: undefined;
  Dashboard: undefined;
  Search: undefined;
  Bookings: undefined;
  Profile: undefined;
  AdminScreen: undefined; 
};

type PhoneNumberScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PhoneNumber'>;

const PhoneNumberScreen: React.FC = () => {
  const navigation = useNavigation<PhoneNumberScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    if (phoneNumber.trim() === '977') {
      navigation.navigate('AdminScreen'); // ✅ Go to Admin panel if number is 977
    } else {
      navigation.navigate('Profile');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Please enter your phone number to continue</Text>
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="+977 Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {['Home', 'Search', 'Bookings', 'Profile'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => {
              if (item === 'Home') {
                navigation.navigate('Dashboard');
              } else if (item === 'Search') {
                navigation.navigate('Search');
              } else if (item === 'Bookings') {
                navigation.navigate('Bookings');
              } else if (item === 'Profile') {
                navigation.navigate('PhoneNumber');
              }
            }}
          >
            <Text style={styles.navIcon}>
              {item === 'Home' ? '🏠' : item === 'Search' ? '🔍' : item === 'Bookings' ? '📅' : '👤'}
            </Text>
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
  },
  navText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default PhoneNumberScreen;

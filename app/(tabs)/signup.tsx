import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Dashboard: undefined;
};

type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    // Simulate sign-up success
    const isSuccess = true; // You can replace this with actual logic for signing up the user

    if (isSuccess) {
      setMessage('Sign-up successful! Redirecting...');
      setTimeout(() => {
        navigation.navigate('Login'); // Navigate to Login after signup success
      }, 2000); // Wait for 2 seconds before navigating
    } else {
      setMessage('Sign-up failed! Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {message && <Text style={styles.message}>{message}</Text>}
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  message: {
    marginTop: 10,
    color: 'green',
    textAlign: 'center',
  },
});

export default SignupScreen;

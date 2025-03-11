import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingDetailsScreen: React.FC = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    date: '',
    address: '',
    negotiatedCost: '',
    time: '',
    city: '',
  });

  const handleBookingSubmit = () => {
    console.log('Booking Details:', formData);
    alert('Booking Confirmed!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Booking Details</Text>
      </View>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={formData.date}
        onChangeText={(text) => setFormData({ ...formData, date: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Negotiated Cost"
        keyboardType="numeric"
        value={formData.negotiatedCost}
        onChangeText={(text) => setFormData({ ...formData, negotiatedCost: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={formData.time}
        onChangeText={(text) => setFormData({ ...formData, time: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={formData.city}
        onChangeText={(text) => setFormData({ ...formData, city: text })}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleBookingSubmit}>
        <Text style={styles.submitButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  backText: {
    fontSize: 22,
    color: '#007bff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default BookingDetailsScreen;

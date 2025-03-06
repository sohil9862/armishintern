import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Define the navigation type
type RootStackParamList = {
  ServiceDetailsScreen: { service: { title: string; price: string; description: string; image: any } };
  Dashboard: undefined;
  SpecialServicesScreen: undefined;
};

// Navigation prop type
type SpecialServicesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SpecialServicesScreen'>;

const SpecialServicesScreen: React.FC = () => {
  const navigation = useNavigation<SpecialServicesScreenNavigationProp>();

  // Services data
  const services = [
    { title: 'Laptop Servicing', price: 'Rs. 2000', description: 'Expert laptop servicing.', image: require('../../assets/images/laptop.jpg') },
    { title: 'Plumbing', price: 'Rs. 1500', description: 'Professional plumbing services.', image: require('../../assets/images/laptop.jpg') },
    { title: 'Car Servicing', price: 'Rs. 3000', description: 'Comprehensive car servicing.', image: require('../../assets/images/laptop.jpg') },
    { title: 'House Cleaning', price: 'Rs. 1200', description: 'Deep cleaning for your home.', image: require('../../assets/images/laptop.jpg') },
    { title: 'Electrical Repair', price: 'Rs. 1800', description: 'Expert electrical services.', image: require('../../assets/images/laptop.jpg') },
    { title: 'Carpentry', price: 'Rs. 2200', description: 'Custom furniture and repairs.', image: require('../../assets/images/laptop.jpg') },
  ];

  // State for booking modal and form data
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    member: '',
    address: '',
    negotiatedCost: '',
    time: '',
  });

  // Handle form submission
  const handleBookingSubmit = () => {
    console.log(formData);  // Here you can send the form data to the backend
    setIsModalVisible(false); // Close the modal after submitting
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Dashboard')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Services</Text>
      <ScrollView>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceCard}
            onPress={() => navigation.navigate('ServiceDetailsScreen', { service })}
          >
            <Image source={service.image} style={styles.image} />
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.price}>{service.price}</Text>

            {/* Booking Button for each service */}
            <TouchableOpacity style={styles.bookingButton} onPress={() => setIsModalVisible(true)}>
              <Text style={styles.bookingButtonText}>Book Now</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Booking Form Modal */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Booking Form</Text>
            
            {/* Form Fields */}
            <TextInput
              style={styles.input}
              placeholder="Date"
              value={formData.date}
              onChangeText={(text) => setFormData({ ...formData, date: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Member"
              value={formData.member}
              onChangeText={(text) => setFormData({ ...formData, member: text })}
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
            
            {/* Submit Button */}
            <Button title="Submit Booking" onPress={handleBookingSubmit} />

            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15,
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#007bff',
  },
  bookingButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  bookingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default SpecialServicesScreen;

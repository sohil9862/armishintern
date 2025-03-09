import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


type ServiceDetailsScreenProps = {
  route: {
    params: {
      service: {
        title: string;
        price: string;
        description: string;
        image: any;
      };
    };
  };
};

const ServiceDetailsScreen: React.FC<ServiceDetailsScreenProps> = ({ route }) => {
  const { service } = route.params; 
  const navigation = useNavigation();
  
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    member: '',
    address: '',
    negotiatedCost: '',
    time: '',
  });

  
  const handleBookingSubmit = () => {
    
    console.log(formData);
    setIsModalVisible(false); // Close modal after submitting
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Service Details */}
      <Image source={service.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.price}>{service.price}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{service.description}</Text>
        </View>
      </View>

      {/* Team Member Section */}
      <View style={styles.teamMemberContainer}>
        <Text style={styles.teamMemberTitle}>Meet Our Expert: Sarah Lee</Text>
        <Image source={require('../../assets/images/laptop.jpg')} style={styles.teamMemberImage} />
        <Text style={styles.teamMemberName}>Sarah Lee</Text>
        <Text style={styles.teamMemberRole}>Electrician</Text>
        <Text style={styles.teamMemberDescription}>
          Sarah is a certified electrician with years of hands-on experience, providing top-notch electrical services for both residential and commercial projects.
        </Text>
      </View>

      {/* Booking Button */}
      <TouchableOpacity style={styles.bookingButton} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.bookingButtonText}>Proceed</Text>
      </TouchableOpacity>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#007bff',
    marginVertical: 10,
  },
  descriptionContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  teamMemberContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  teamMemberTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamMemberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  teamMemberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teamMemberRole: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 10,
  },
  teamMemberDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    paddingHorizontal: 20,
  },
  bookingButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 50, // Increased margin-top to push the button further down
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

export default ServiceDetailsScreen;

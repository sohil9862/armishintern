import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Modal,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  PhoneNumber: undefined;
  Dashboard: undefined;
  Search: undefined;
  Bookings: undefined;
  ProfileScreen: undefined;
  SearchScreen: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfileScreen'
>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    member: '',
    address: '',
    negotiatedCost: '',
    time: ''
  });
  const [addressData, setAddressData] = useState({
    name: 'Peter Parker (Home)',
    street: 'Kamal Pokhari | Kathmandu',
    landmark: 'Near Star Mall',
    phone: '9702222344'
  });


  const handleBookingSubmit = () => {
    // Handle form submission
    console.log(formData);
    setIsModalVisible(false);
  };

  const handleAddressSubmit = () => {
    console.log(addressData);
    setIsAddressModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Peter Parker</Text>
          <Text style={styles.phone}>+977 9723456789</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => setIsModalVisible(true)}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Booking Stats */}
        <View style={styles.statsContainer}>
          {[ 
            { count: 3, label: 'Total Bookings' },
            { count: 0, label: 'Active Bookings' },
            { count: 0, label: 'To Review' },
          ].map((item, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statCount}>{item.count}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Profile Edit Modal */}
<Modal visible={isModalVisible} animationType="slide" transparent={true}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Edit Profile</Text>
      
      {/* Form Fields for Profile Edit */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.member} // Update this if you're storing the user's name elsewhere
        onChangeText={(text) => setFormData({ ...formData, member: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={formData.phone} // Add a phone field to your form data
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
      />
      
      {/* Submit Button */}
      <Button title="Save Changes" onPress={handleBookingSubmit} /> {/* You can rename handleBookingSubmit to handleProfileUpdate */}
      
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

{/* Address Edit Modal */}
<Modal visible={isAddressModalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address Name"
                value={addressData.name}
                onChangeText={(text) => setAddressData({ ...addressData, name: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Street Address"
                value={addressData.street}
                onChangeText={(text) => setAddressData({ ...addressData, street: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Landmark"
                value={addressData.landmark}
                onChangeText={(text) => setAddressData({ ...addressData, landmark: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={addressData.phone}
                onChangeText={(text) => setAddressData({ ...addressData, phone: text })}
                keyboardType="phone-pad"
              />
              <Button title="Save Address" onPress={handleAddressSubmit} />
              <TouchableOpacity style={styles.closeButton} onPress={() => setIsAddressModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Address Book */}
        <View style={styles.addressBook}>
          <Text style={styles.addressTitle}>Address Book</Text>
          <View style={styles.addressItem}>
            <Text>Peter Parker (Home)</Text>
            <Text>Kamal Pokhari | Kathmandu</Text>
            <Text>Near Star Mall</Text>
            <Text>9702222344</Text>
            <View style={styles.addressActions}>
              <TouchableOpacity onPress={() => setIsAddressModalVisible(true)}>
                <Text style={styles.editText}>EDIT</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.deleteText}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.addAddress}>+ ADD</Text>
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <View style={styles.settings}>
          {[ 
            { title: 'Terms & Service' },
            { title: 'Privacy Policy' },
            { title: 'Delete Account'},
            { title: 'Logout' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.settingItem}>
              <Text style={styles.settingText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

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
                navigation.navigate('SearchScreen');
              } else if (item === 'Bookings') {
                navigation.navigate('BookingScreen');
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
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    color: 'gray',
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
  },
  statCount: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  bookingButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  bookingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addressBook: {
    marginBottom: 20,
  },
  addressTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  addressActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
  addAddress: {
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  settings: {
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  settingText: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
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

export default ProfileScreen;

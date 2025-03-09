import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const notificationsData = [
  { id: '1', title: 'New Service Available', message: 'Check out our new home cleaning service with a special offer!', image: require('../../assets/images/laptop.jpg') },
  { id: '2', title: 'Appointment Reminder', message: 'Your appointment with Mark is scheduled for tomorrow at 2 PM.', image: require('../../assets/images/laptop.jpg') },
  { id: '3', title: 'Discount Alert', message: 'Get 20% off on all automobile services this weekend!', image: require('../../assets/images/laptop.jpg') },
  { id: '4', title: 'Team Update', message: 'Tom has been assigned to your service request.', image: require('../../assets/images/laptop.jpg') },
  { id: '5', title: 'Service Completed', message: 'Your cleaning service has been completed. Let us know your feedback!', image: require('../../assets/images/laptop.jpg') },
];

const NotificationScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <View style={styles.notificationCard}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}> </Text>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      </View>
      
      <Text style={styles.headerTitle}>Notifications</Text>
      
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  searchIcon: {
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 15,
    color: '#333',
  },
  notificationList: {
    padding: 15,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
  },
});

export default NotificationScreen;

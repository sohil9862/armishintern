import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Define the navigation type
type RootStackParamList = {
  ServiceDetailsScreen: { service: { title: string; price: string; description: string; image: any; rating: string; teamMember: string } };
  Dashboard: undefined;
  SpecialServicesScreen: undefined;
};

// Navigation prop type
type SpecialServicesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SpecialServicesScreen'>;

const SpecialServicesScreen: React.FC = () => {
  const navigation = useNavigation<SpecialServicesScreenNavigationProp>();

  // Services data with rating and team member
  const services = [
    { title: 'Laptop Servicing', price: 'Rs. 2000', description: 'Expert laptop servicing.', image: require('../../assets/images/laptop.jpg'), rating: '4.5/5', teamMember: 'Tom' },
    { title: 'Plumbing', price: 'Rs. 1500', description: 'Professional plumbing services.', image: require('../../assets/images/laptop.jpg'), rating: '4.2/5', teamMember: 'Jerry' },
    { title: 'Car Servicing', price: 'Rs. 3000', description: 'Comprehensive car servicing.', image: require('../../assets/images/laptop.jpg'), rating: '4.8/5', teamMember: 'Alice' },
    { title: 'House Cleaning', price: 'Rs. 1200', description: 'Deep cleaning for your home.', image: require('../../assets/images/laptop.jpg'), rating: '4.6/5', teamMember: 'Bob' },
    { title: 'Electrical Repair', price: 'Rs. 1800', description: 'Expert electrical services.', image: require('../../assets/images/laptop.jpg'), rating: '4.3/5', teamMember: 'Lily' },
    { title: 'Carpentry', price: 'Rs. 2200', description: 'Custom furniture and repairs.', image: require('../../assets/images/laptop.jpg'), rating: '4.7/5', teamMember: 'John' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Dashboard')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Popular Services</Text>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      </View>
      <ScrollView>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceCard}
            onPress={() => navigation.navigate('ServiceDetailsScreen', { service })}
          >
            <Image source={service.image} style={styles.image} />
            <View style={styles.serviceTextContainer}>
              {/* Team Member and Title */}
              <Text style={styles.title}>{service.title}</Text>
              <Text style={styles.teamMember}>By {service.teamMember}</Text>

              {/* Rating and Price */}
              <View style={styles.ratingContainer}>
                <Text style={styles.price}>{service.price}</Text>
                <Text style={styles.popularRating}>Rating: {service.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centers the header title
    alignItems: 'center',
    marginBottom: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Ensures the text is centered
    flex: 1, // Make it take up available space so that the search icon can be aligned to the right
  },
  searchIcon: {
    position: 'absolute',
    right: 15, // Places the search icon on the right side
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row', // Aligning the image on the left and text on the right
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceTextContainer: {
    flex: 1, // This ensures the text takes up available space, leaving room for the image
    paddingLeft: 15, // Space between the text and image
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 5, // Added space below the rating
  },
  ratingContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  popularRating: {
    fontSize: 12,
    color: '#ffd700', // Gold color for rating
  },
  teamMember: {
    fontSize: 12,
    color: '#777', // Grey color for team member
    marginBottom: 5, // Add spacing between team member and title
  },
});

export default SpecialServicesScreen;

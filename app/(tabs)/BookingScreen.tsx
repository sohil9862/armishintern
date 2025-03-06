import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BookingScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Static Booking Details */}
        <View style={styles.bookingCard}>
          <Image
            source={require("../../assets/images/laptop.jpg")} // Local image for laptop repair
            style={styles.bookingImage}
          />
          <Text style={styles.bookingTitle}>Laptop Repair</Text>
          <Text style={styles.bookingDetail}>Time: 2:00 PM</Text>
          <Text style={styles.bookingDetail}>Address: Kamal Pokhari, Kathmandu</Text>
          <Text style={styles.bookingDetail}>Price: Rs. 2000</Text>
        </View>

        <View style={styles.bookingCard}>
          <Image
            source={require("../../assets/images/laptop.jpg")} // Local image for cleaning service (You can replace it with a relevant image)
            style={styles.bookingImage}
          />
          <Text style={styles.bookingTitle}>Cleaning Service</Text>
          <Text style={styles.bookingDetail}>Time: 10:00 AM</Text>
          <Text style={styles.bookingDetail}>Address: New Baneshwor, Kathmandu</Text>
          <Text style={styles.bookingDetail}>Price: Rs. 300</Text>
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
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
  },
  bookingCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  bookingImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookingDetail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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

export default BookingScreen;

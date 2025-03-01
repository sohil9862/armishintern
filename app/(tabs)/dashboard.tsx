import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  PhoneNumber: undefined;
  Dashboard: undefined;
  Search: undefined;
  Bookings: undefined;
  Profile: undefined;
};

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation();

  // Expanded services
  const services = [
    {
      title: "Laptop Servicing",
      price: "Rs. 2000",
      image: require("../../assets/images/laptop.jpg"),
    },
    {
      title: "AC Repair",
      price: "Rs. 1500",
      image: require("../../assets/images/laptop.jpg"),
    },
    {
      title: "Cleaning Service",
      price: "Rs. 500",
      image: require("../../assets/images/laptop.jpg"),
    },
    {
      title: "Car Service",
      price: "Rs. 3000",
      image: require("../../assets/images/laptop.jpg"),
    },
    {
      title: "Painting Services",
      price: "Rs. 1200",
      image: require("../../assets/images/laptop.jpg"),
    },
  ];

  // Expanded categories
  const categories = [
    { title: "Automobile", icon: "🚗" },
    { title: "Pet Care", icon: "🐾" },
    { title: "Cleaning", icon: "🧹" },
    { title: "Home Maintenance", icon: "🔧" },
    { title: "Beauty & Spa", icon: "💅" },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "John Doe",
      role: "Manager",
      image: require("../../assets/images/laptop.jpg"),
    },
    {
      name: "Mark Smith",
      role: "Technician",
      image: require("../../assets/images/laptop.jpg"),
    },
    {
      name: "Tom White",
      role: "Support",
      image: require("../../assets/images/laptop.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.helloText}>Hello, Guest</Text>
          <TextInput style={styles.searchBar} placeholder="Search" />
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryText}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <View style={styles.popularServices}>
            {services.map((service, index) => (
              <TouchableOpacity key={index} style={styles.popularCard}>
                <Image source={service.image} style={styles.popularImage} />
                <Text style={styles.popularTitle}>{service.title}</Text>
                <Text style={styles.popularPrice}>{service.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Team Members Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <View style={styles.teamMembers}>
            {teamMembers.map((member, index) => (
              <View key={index} style={styles.teamCard}>
                <Image source={member.image} style={styles.teamImage} />
                <Text style={styles.teamName}>{member.name}</Text>
                <Text style={styles.teamRole}>{member.role}</Text>
              </View>
            ))}
          </View>
        </View>

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

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  helloText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchBar: {
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryCard: {
    width: "30%",
    backgroundColor: "#f1f1f1",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
  },
  popularServices: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  popularCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  popularImage: {
    width: "100%",
    height: 80,
    marginBottom: 5,
    borderRadius: 8,
  },
  popularTitle: {
    fontSize: 12,
  },
  popularPrice: {
    fontSize: 12,
    fontWeight: "bold",
  },
  teamMembers: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  teamCard: {
    width: "30%",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 10,
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  teamName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  teamRole: {
    fontSize: 12,
    color: "#666",
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

export default DashboardScreen;

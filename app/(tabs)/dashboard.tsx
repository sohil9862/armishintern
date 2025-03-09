import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  PhoneNumber: undefined;
  Dashboard: undefined;
  Search: undefined;
  Bookings: undefined;
  Profile: undefined;
  SpecialServicesScreen: undefined;
  SearchScreen: undefined;
  TeamMemberDetail: { name: string; role: string; image: any; rating: number; description: string };
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation();

  // State for location
  const [selectedLocation, setSelectedLocation] = useState('Kathmandu');
  const [showLocationOptions, setShowLocationOptions] = useState(false);

  // Expanded services
  const services = [
    {
      title: "Laptop Servicing",
      price: "Rs. 2000",
      image: require("../../assets/images/laptop.jpg"),
      rating: 4.5,
      teamMember: "Emily", 
    },
    {
      title: "AC Repair",
      price: "Rs. 1500",
      image: require("../../assets/images/laptop.jpg"),
      rating: 4,
      teamMember: "Tom", 
    },
    {
      title: "Cleaning Service",
      price: "Rs. 500",
      image: require("../../assets/images/laptop.jpg"),
      rating: 3.5,
      teamMember: "Mark", 
    },
    {
      title: "Car Service",
      price: "Rs. 3000",
      image: require("../../assets/images/laptop.jpg"),
      rating: 4.5,
      teamMember: "John", 
    },
    {
      title: "Painting Services",
      price: "Rs. 1200",
      image: require("../../assets/images/laptop.jpg"),
      rating: 4,
      teamMember: "Tom", 
    },
  ];

  // Expanded categories
  const categories = [
    { title: "Automobile", icon: "🚗" },
    { title: "Pet Care", icon: "🐾" },
    { title: "Cleaning", icon: "🧹" },
    { title: "Home Maintenance", icon: "🔧" },
    
  ];

  // Special Service (Gas Installation with Discount)
  const specialService = {
    title: "Dashain Offer Get Special Offer",
    discount: "Up to 30% OFF",
    price: "Plumbing: Gas Geyser Installation",
    image: require("../../assets/images/laptop.jpg"),
  };

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
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header with Location in the center */}
        <View style={styles.header}>
          {/* Profile Picture (Top Right) */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require("../../assets/images/laptop.jpg")} style={styles.profileImage} />
          </TouchableOpacity>

          {/* Location Text in the Center */}
          <View style={styles.locationHeader}>
            <Text style={styles.locationText}>{selectedLocation}</Text>
          </View>

          <TouchableOpacity onPress={() => setShowLocationOptions(!showLocationOptions)}>
            <Text style={styles.locationChangeText}>Change Location</Text>
          </TouchableOpacity>
        </View>

        

        {showLocationOptions && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.locationOptions}>
            {['Kathmandu', 'Pokhara', 'Chitwan'].map((location, index) => (
              <TouchableOpacity key={index} onPress={() => {
                setSelectedLocation(location);
                setShowLocationOptions(false); // Close options after selection
              }} style={styles.locationOption}>
                <Text style={[styles.locationOptionText, selectedLocation === location && styles.selectedLocation]}>
                  {location}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        

        {/* Header with Search */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBar} placeholder="Search" />
        </View>

        {/* 🔥 Special Service Section 🔥 */}
        
        <View style={styles.specialService}>
          <View style={styles.specialDetails}>
            <Text style={styles.specialTitle}>{specialService.title}</Text>
            <Text style={styles.specialDiscount}>{specialService.discount}</Text>
            <Text style={styles.specialPrice}></Text>
            <TouchableOpacity 
          style={styles.serviceButton} 
          onPress={() => navigation.navigate('SpecialServicesScreen')}
        >
          <Text style={styles.buttonText}>Get Service Now</Text>
        </TouchableOpacity>
            
          </View>
          <Image source={specialService.image} style={styles.specialImage} />
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllCategoriesScreen')}>
          <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate('SpecialServicesScreen')}>
          <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularServices}>
    {services.map((service, index) => (
      <TouchableOpacity key={index} style={styles.popularCard}>
        <Image source={service.image} style={styles.popularImage} />
        <Text style={styles.popularTitle}>{service.title}</Text>
        

         {/* Display Rating */}
         <Text style={styles.popularRating}>
              {"★".repeat(Math.floor(service.rating))}{" "}
              {service.rating % 1 !== 0 ? "☆" : ""} {/* Display partial star if applicable */}
            </Text>

            {/* Display Team Member */}
            <Text style={styles.teamMember}>by {service.teamMember}</Text>
            <Text style={styles.popularPrice}>{service.price}</Text>
            <Text style={styles.popularRating}>
              {"★".repeat(Math.floor(service.rating))}{" "}
              {service.rating % 1 !== 0 ? "☆" : ""} {/* Display partial star if applicable */}
            </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
        </View>

        {/* Team Members Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TeamMemberScreen')}>
          <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
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
    justifyContent: "flex-end",
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationHeader: {
    flex: 1,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationChangeText: {
    fontSize: 16,
    color: '#007bff',
  },
  locationOptions: {
    flexDirection: 'row',
  },
  locationOption: {
    marginLeft: 15,
  },
  locationOptionText: {
    fontSize: 16,
    color: "#007bff",
  },
  selectedLocation: {
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  searchBar: {
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  seeAll: { 
    fontSize: 14,              // Increased font size for better readability
    color: "blue",
    alignSelf: 'flex-end',
    textDecorationLine: "underline",  // Make it look like a clickable link
  },
  
  specialService: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    justifyContent: 'space-between',
  },
  specialImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  specialDetails: {
    flex: 1,
  },
  specialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  specialDiscount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  specialPrice: {
    fontSize: 14,
    color: 'white',
  },
  serviceButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#007bff',
    fontWeight: 'bold',
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
    flexDirection: "row", // Align items in a row
    flexWrap: "nowrap", // Do not wrap items
    justifyContent: "flex-start", // Align to the start of the row
  },
  categoryCard: {
    width: 90, // Smaller width for each category card
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginRight: 10, // Add spacing between cards
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center", // Center the icon and text within the card
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 10, // Smaller font size for category text
    textAlign: "center",
  },
  popularServices: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  popularServices: {
    flexDirection: "row", // Ensure items are aligned in a row
    paddingVertical: 10,
  },
  popularCard: {
    width: 160, // Set a fixed width for each card
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginRight: 10, // Space between cards
    borderWidth: 1, // Adds the border width
    borderColor: "#ddd", // Sets the border color (light gray)
  },
  popularImage: {
    width: "100%",
    height: 80,
    marginBottom: 5,
    borderRadius: 8,
  },
  popularTitle: {
    fontSize: 12,
    textAlign: "center",
  },
  popularPrice: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  popularRating: {
    fontSize: 14,
    color: "#ffd700", // Gold color for the rating stars
    textAlign: "center",
  },
  teamMember: {
    fontSize: 12,
    color: "#555", // Lighter color for the team member name
    textAlign: "center",
    marginTop: 5, // Add some space above the name
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
    padding: 15,
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

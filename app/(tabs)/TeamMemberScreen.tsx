import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const teamMembers = [
  { 
    name: "John Doe", 
    role: "Manager", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.8,
    description: "John is an experienced manager with a track record of leading successful projects."
  },
  { 
    name: "Mark Smith", 
    role: "Technician", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.5,
    description: "Mark specializes in troubleshooting and repairing electronic devices."
  },
  { 
    name: "Tom White", 
    role: "Support", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.7,
    description: "Tom is known for his exceptional customer support and problem-solving skills."
  },
  { 
    name: "Emily Johnson", 
    role: "Designer", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.6,
    description: "Emily is a creative designer with expertise in modern and aesthetic designs."
  },
  { 
    name: "Sarah Lee", 
    role: "Electrician", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.9,
    description: "Sarah is a certified electrician with years of hands-on experience."
  },
  { 
    name: "Michael Brown", 
    role: "Plumber", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.4,
    description: "Michael is an expert in plumbing solutions, ensuring leak-free installations."
  },
  { 
    name: "Jessica Davis", 
    role: "Painter", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.3,
    description: "Jessica transforms spaces with her expert painting skills and attention to detail."
  },
  { 
    name: "David Wilson", 
    role: "Carpenter", 
    image: require("../../assets/images/laptop.jpg"), 
    rating: 4.7,
    description: "David crafts custom woodwork with precision and quality craftsmanship."
  },
];

const TeamMembersScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Meet Our Team</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {teamMembers.map((member, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.teamCard} 
            onPress={() => navigation.navigate("TeamMemberDetailScreen", member)}
          >
            <Image source={member.image} style={styles.teamImage} />
            <Text style={styles.teamName}>{member.name}</Text>
            <Text style={styles.teamRole}>{member.role}</Text>
            <Text style={styles.teamRating}>⭐ {member.rating}</Text>
            <Text style={styles.teamDescription}>{member.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: "#007bff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
  },
  teamCard: {
    width: "90%",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  teamName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  teamRole: {
    fontSize: 14,
    color: "#666",
  },
  teamRating: {
    fontSize: 14,
    color: "#ffa500",
    marginTop: 5,
  },
  teamDescription: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 10,
  },
});

export default TeamMembersScreen;

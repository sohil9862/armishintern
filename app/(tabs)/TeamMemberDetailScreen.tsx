import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";


type RootStackParamList = {
  TeamMembers: undefined;
  TeamMemberDetail: { name: string; role: string; image: any; rating: number; description: string };
};

type TeamMemberDetailRouteProp = RouteProp<RootStackParamList, "TeamMemberDetail">;
type NavigationProp = StackNavigationProp<RootStackParamList, "TeamMemberDetail">;

const TeamMemberDetailScreen: React.FC = () => {
  const route = useRoute<TeamMemberDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { name, role, image, rating, description } = route.params;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Team Member Image */}
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Services Section */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>Our Services</Text>

        {/* Laptop Repairing Service */}
        <View style={styles.serviceBox}>
          <Image source={require("../../assets/images/laptop.jpg")} style={styles.serviceImageLeft} />
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceTitle}>Laptop Repairing</Text>
            <Text style={styles.serviceDescription}>
              Our expert technicians provide fast and reliable laptop repair services, including screen replacements, motherboard repairs, and software troubleshooting.
            </Text>
          </View>
        </View>

        {/* Plumbing Service */}
        <View style={styles.serviceBox}>
          <Image source={require("../../assets/images/laptop.jpg")} style={styles.serviceImageRight} />
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceTitle}>Plumbing</Text>
            <Text style={styles.serviceDescription}>
              Our certified plumbers can handle any plumbing issue, from leaky faucets to full installations and repairs of water systems, ensuring everything runs smoothly.
            </Text>
          </View>
        </View>

        {/* Electrical Service */}
        <View style={styles.serviceBox}>
          <Image source={require("../../assets/images/laptop.jpg")} style={styles.serviceImageLeft} />
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceTitle}>Electrical Services</Text>
            <Text style={styles.serviceDescription}>
              We provide expert electrical services, including wiring, repairs, and installations. Whether it's a minor issue or a major upgrade, we've got you covered.
            </Text>
          </View>
        </View>

        {/* AC Repairing Service */}
        <View style={styles.serviceBox}>
          <Image source={require("../../assets/images/laptop.jpg")} style={styles.serviceImageRight} />
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceTitle}>AC Repairing</Text>
            <Text style={styles.serviceDescription}>
              Our experienced technicians specialize in air conditioning repairs and maintenance, ensuring your AC runs smoothly during hot weather.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  backText: {
    fontSize: 16,
    color: "#007bff",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  role: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  rating: {
    fontSize: 18,
    color: "goldenrod",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  servicesContainer: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  serviceBox: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row", 
    alignItems: "center",
  },
  serviceImageLeft: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  serviceImageRight: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  serviceTextContainer: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  serviceDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#333",
    textAlign: "left",
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 1, 
  }
});

export default TeamMemberDetailScreen;

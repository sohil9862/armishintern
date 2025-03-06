import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define the navigation stack params
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
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
      <Text style={styles.description}>{description}</Text>
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
});

export default TeamMemberDetailScreen;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";  // Import Ionicons for hammer icon
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Dashboard: undefined;
};

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Content Area */}
      <View style={styles.content}>
        {/* Hammer Icon */}
        <Ionicons name="hammer" size={80} color="#fff" style={styles.icon} />

        {/* Welcome Text */}
        <Text style={styles.title}>COMFORT SERVICE</Text>
        <Text style={styles.subtitle}>
          With Our On-Demand Service App, We Give Better Service To You.
        </Text>
      </View>

      {/* Get Started Button at the Bottom */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bff",  // Blue background
    justifyContent: "space-between",  // Space between content and button
    padding: 20,
  },
  content: {
    justifyContent: "center",  // Center content vertically
    alignItems: "center",  // Center content horizontally
    flex: 1,  // Take all available space
  },
  icon: {
    marginBottom: 30,  // Adds space between icon and title
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 21,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,  // Adds space between subtitle and button
  },
  button: {
    backgroundColor: "#004085",  // Dark blue color for the button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
    width: "80%",  // Center the button and make it smaller
    alignSelf: "center",
    position: "absolute",  // Position the button at the bottom
    bottom: 20,  // Ensure it stays at the very bottom
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Welcome;

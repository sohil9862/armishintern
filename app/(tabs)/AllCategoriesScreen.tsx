import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { title: "Automobile", icon: "🚗" },
  { title: "Pet Care", icon: "🐾" },
  { title: "Cleaning", icon: "🧹" },
  { title: "Home Maintenance", icon: "🔧" },
  { title: "Beauty & Spa", icon: "💅" },
  { title: "Plumbing", icon: "🚰" },
  { title: "Electrical", icon: "💡" },
  { title: "Painting", icon: "🎨" },
  { title: "Carpentry", icon: "🔨" },
];

const AllCategoriesScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToCategoryPage = (categoryTitle: string) => {
    // Navigate to a specific category screen
    navigation.navigate("CategoryDetailScreen", { categoryTitle });
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>All Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.categoryCard} 
            onPress={() => navigateToCategoryPage(item.title)}
          >
            <Text style={styles.categoryIcon}>{item.icon}</Text>
            <Text style={styles.categoryText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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
    position: "absolute",
    top: 20,
    left: 15,
    zIndex: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    marginTop: 50,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 15,
    margin: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  categoryIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default AllCategoriesScreen;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type CategoryDetailScreenRouteProp = RouteProp<{ 
  CategoryDetailScreen: { categoryTitle: string };
}, 'CategoryDetailScreen'>;

type Props = {
  route: CategoryDetailScreenRouteProp;
};

const CategoryDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { categoryTitle } = route.params;

  // Example of category images with local images
  const categoryImages: { [key: string]: any } = {
    "Automobile": require("../../assets/images/laptop.jpg"),
    "Pet Care": require("../../assets/images/laptop.jpg"), 
    "Cleaning": require("../../assets/images/laptop.jpg"),
    "Home Maintenance": require("../../assets/images/laptop.jpg"),
    "Beauty & Spa": require("../../assets/images/laptop.jpg"),
    "Plumbing": require("../../assets/images/laptop.jpg"),
    "Electrical": require("../../assets/images/laptop.jpg"),
    "Painting": require("../../assets/images/laptop.jpg"),
    "Carpentry": require("../../assets/images/laptop.jpg"),
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Category Image */}
      <Image
        source={categoryImages[categoryTitle] || require("../../assets/images/laptop.jpg")}
        style={styles.categoryImage}
      />

      {/* Category Title and Details */}
      <Text style={styles.header}>Category: {categoryTitle}</Text>
      <Text style={styles.details}>Here are services related to {categoryTitle}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
    zIndex: 10,
  },
  categoryImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: "cover",  
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  details: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default CategoryDetailScreen;

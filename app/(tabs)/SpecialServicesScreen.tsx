import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ServiceDetails: { service: { title: string; price: string; description: string; image: any } };
  SpecialServices: undefined;
};

type SpecialServicesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SpecialServices'>;

const SpecialServicesScreen: React.FC = () => {
  const navigation = useNavigation<SpecialServicesScreenNavigationProp>();

  const services = [
    {
      title: 'Laptop Servicing',
      price: 'Rs. 2000',
      description: 'Expert laptop servicing including hardware and software fixes.',
      image: require('../../assets/images/laptop.jpg'),
    },
    {
      title: 'Plumbing',
      price: 'Rs. 1500',
      description: 'Professional plumbing services for all your household needs.',
      image: require('../../assets/images/laptop.jpg'),
    },
    {
      title: 'Car Servicing',
      price: 'Rs. 3000',
      description: 'Comprehensive car servicing to keep your vehicle in top shape.',
      image: require('../../assets/images/laptop.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Special Services</Text>
      <ScrollView>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceCard}
            onPress={() => navigation.navigate('ServiceDetails', { service })}
          >
            <Image source={service.image} style={styles.image} />
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.price}>{service.price}</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default SpecialServicesScreen;

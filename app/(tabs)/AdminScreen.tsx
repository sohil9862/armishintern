import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    PhoneNumber: undefined;
    Dashboard: undefined;
    Search: undefined;
    Bookings: undefined;
    Profile: undefined;
    AdminScreen: undefined; 
  };

const AdminScreen = () => {
  const [activeTab, setActiveTab] = useState('users');
  const navigation = useNavigation();

  // Mock data for each section
  const userData = {
    totalUsers: 1247,
    activeUsers: 892,
    newUsersToday: 28,
  };
  
  const bookingData = {
    totalBookings: 3568,
    pendingBookings: 42,
    completedToday: 87,
  };
  
  const servicesData = {
    totalServices: 24,
    popularService: "plumber",
    averageRating: 4.8,
  };

  const handleLogout = () => {
    // Navigate to sign in screen
    navigation.navigate('PhoneNumber');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <View style={styles.tabContent}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>👥 User Information</Text>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={[styles.statCard, { backgroundColor: '#EEF2FF' }]}>
                <Text style={styles.statLabel}>Total Users</Text>
                <Text style={styles.statValue}>{userData.totalUsers}</Text>
                <Text style={styles.statIcon}>📊</Text>
              </View>
              
              <View style={[styles.statCard, { backgroundColor: '#ECFDF5' }]}>
                <Text style={styles.statLabel}>Active Users</Text>
                <Text style={styles.statValue}>{userData.activeUsers}</Text>
                <Text style={styles.statIcon}>✅</Text>
              </View>
              
              <View style={[styles.statCard, { backgroundColor: '#EFF6FF' }]}>
                <Text style={styles.statLabel}>New Today</Text>
                <Text style={styles.statValue}>{userData.newUsersToday}</Text>
                <Text style={styles.statIcon}>➕</Text>
              </View>
            </View>
            
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Add New User</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>View All Users</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
        
      case 'bookings':
        return (
          <View style={styles.tabContent}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>📅 Booking Details</Text>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={[styles.statCard, { backgroundColor: '#FFF7ED' }]}>
                <Text style={styles.statLabel}>Total Bookings</Text>
                <Text style={styles.statValue}>{bookingData.totalBookings}</Text>
                <Text style={styles.statIcon}>📊</Text>
              </View>
              
              <View style={[styles.statCard, { backgroundColor: '#FEFCE8' }]}>
                <Text style={styles.statLabel}>Pending</Text>
                <Text style={styles.statValue}>{bookingData.pendingBookings}</Text>
                <Text style={styles.statIcon}>⚠️</Text>
              </View>
              
              <View style={[styles.statCard, { backgroundColor: '#F0FDFA' }]}>
                <Text style={styles.statLabel}>Completed Today</Text>
                <Text style={styles.statValue}>{bookingData.completedToday}</Text>
                <Text style={styles.statIcon}>✅</Text>
              </View>
            </View>
            
            <View style={styles.actionButtons}>
              <TouchableOpacity style={[styles.primaryButton, { backgroundColor: '#EA580C' }]}>
                <Text style={styles.primaryButtonText}>Create Booking</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>View Calendar</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
        
      case 'services':
        return (
          <View style={styles.tabContent}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>⚙️ Add Services</Text>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={[styles.statCard, { backgroundColor: '#FAF5FF' }]}>
                <Text style={styles.statLabel}>Total Services</Text>
                <Text style={styles.statValue}>{servicesData.totalServices}</Text>
                <Text style={styles.statIcon}>⚙️</Text>
              </View>
              
              <View style={[styles.statCard, { backgroundColor: '#FDF2F8' }]}>
                <Text style={styles.statLabel}>Popular Service</Text>
                <Text style={styles.statValue}>{servicesData.popularService}</Text>
                <Text style={styles.statIcon}>📊</Text>
              </View>
              
              <View style={[styles.statCard, { backgroundColor: '#F5F3FF' }]}>
                <Text style={styles.statLabel}>Average Rating</Text>
                <Text style={styles.statValue}>{servicesData.averageRating}/5</Text>
                <Text style={styles.statIcon}>✅</Text>
              </View>
            </View>
            
            <View style={styles.actionButtons}>
              <TouchableOpacity style={[styles.primaryButton, { backgroundColor: '#9333EA' }]}>
                <Text style={styles.primaryButtonText}>Add New Service</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Manage Services</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
        
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
        <View style={styles.headerRight}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AS</Text>
            </View>
            <Text style={styles.username}>Admin</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'users' && styles.activeTab]} 
          onPress={() => setActiveTab('users')}
        >
          <Text style={[styles.tabText, activeTab === 'users' && styles.activeTabText]}>👥 Users</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'bookings' && styles.activeTab]} 
          onPress={() => setActiveTab('bookings')}
        >
          <Text style={[styles.tabText, activeTab === 'bookings' && styles.activeTabText]}>📅 Bookings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'services' && styles.activeTab]} 
          onPress={() => setActiveTab('services')}
        >
          <Text style={[styles.tabText, activeTab === 'services' && styles.activeTabText]}>⚙️ Services</Text>
        </TouchableOpacity>
      </View>
      
      {/* Content */}
      <ScrollView style={styles.content}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#4F46E5',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  username: {
    color: 'white',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#4338CA',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: 'white',
    fontWeight: '500',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5',
  },
  tabText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  tabContent: {
    padding: 16,
  },
  sectionHeader: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  statsContainer: {
    marginBottom: 16,
  },
  statCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    position: 'relative',
  },
  statLabel: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  statIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    fontSize: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  primaryButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  secondaryButtonText: {
    color: '#4B5563',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default AdminScreen;
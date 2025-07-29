import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import { Phone, TriangleAlert as AlertTriangle } from 'lucide-react-native';

export default function DashboardScreen() {
  const handleCallDetection = () => {
    router.push('/(screens)/call-detection');
  };

  const handleSOSServices = () => {
    router.push('/(screens)/sos-services');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Safe Ride</Text>
      </View>

      <View style={styles.imageSection}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        
        <TouchableOpacity style={styles.serviceCard} onPress={handleCallDetection}>
          <View style={styles.serviceIcon}>
            <Phone size={32} color="#000" />
          </View>
          <View style={styles.serviceContent}>
            <Text style={styles.serviceTitle}>Call Detection</Text>
            <Text style={styles.serviceDescription}>
              Advanced call detection and monitoring system
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceCard} onPress={handleSOSServices}>
          <View style={styles.serviceIcon}>
            <AlertTriangle size={32} color="#000" />
          </View>
          <View style={styles.serviceContent}>
            <Text style={styles.serviceTitle}>SOS Services</Text>
            <Text style={styles.serviceDescription}>
              Emergency assistance and support services
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  imageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imageContainer: {
    width: '30%',
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  servicesSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
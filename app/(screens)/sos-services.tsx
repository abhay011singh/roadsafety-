import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, TriangleAlert as AlertTriangle, User, Users } from 'lucide-react-native';

export default function SOSServicesScreen() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>SOS Services</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.iconContainer}>
          <AlertTriangle size={64} color="#ff4444" />
        </View>

        <Text style={styles.description}>
          Choose the type of emergency assistance you need. Our SOS services provide immediate help in critical situations.
        </Text>

        <View style={styles.servicesContainer}>
          <TouchableOpacity
            style={[
              styles.serviceCard,
              selectedService === 'self' && styles.selectedCard
            ]}
            onPress={() => setSelectedService('self')}
          >
            <View style={styles.serviceIcon}>
              <User size={32} color={selectedService === 'self' ? '#fff' : '#000'} />
            </View>
            <View style={styles.serviceContent}>
              <Text style={[
                styles.serviceTitle,
                selectedService === 'self' && styles.selectedText
              ]}>
                Self Emergency
              </Text>
              <Text style={[
                styles.serviceDescription,
                selectedService === 'self' && styles.selectedDescription
              ]}>
                Request emergency assistance for yourself
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.serviceCard,
              selectedService === 'other' && styles.selectedCard
            ]}
            onPress={() => setSelectedService('other')}
          >
            <View style={styles.serviceIcon}>
              <Users size={32} color={selectedService === 'other' ? '#fff' : '#000'} />
            </View>
            <View style={styles.serviceContent}>
              <Text style={[
                styles.serviceTitle,
                selectedService === 'other' && styles.selectedText
              ]}>
                Help Others
              </Text>
              <Text style={[
                styles.serviceDescription,
                selectedService === 'other' && styles.selectedDescription
              ]}>
                Report emergency for someone else
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {selectedService && (
          <TouchableOpacity style={styles.activateButton}>
            <Text style={styles.activateButtonText}>
              Activate {selectedService === 'self' ? 'Self' : 'Other'} Emergency
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  servicesContainer: {
    marginBottom: 30,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    backgroundColor: '#000',
    borderColor: '#000',
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
  selectedText: {
    color: '#fff',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  selectedDescription: {
    color: '#ccc',
  },
  activateButton: {
    backgroundColor: '#ff4444',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  activateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
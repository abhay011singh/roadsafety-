import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Phone } from 'lucide-react-native';

export default function CallDetectionScreen() {
  const [rideEnabled, setRideEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Call Detection</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Phone size={64} color="#000" />
        </View>

        <Text style={styles.description}>
          Enable call detection to monitor and analyze your ride calls for safety and quality purposes.
        </Text>

        <View style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Ride Monitoring</Text>
            <Text style={styles.optionDescription}>
              Monitor calls during your rides for enhanced safety
            </Text>
          </View>
          <Switch
            value={rideEnabled}
            onValueChange={setRideEnabled}
            trackColor={{ false: '#e0e0e0', true: '#000' }}
            thumbColor={rideEnabled ? '#fff' : '#fff'}
          />
        </View>

        {rideEnabled && (
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Call Detection Active</Text>
            <Text style={styles.statusDescription}>
              Your ride calls are being monitored for safety purposes.
            </Text>
          </View>
        )}
      </View>
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
    alignItems: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  optionContent: {
    flex: 1,
    marginRight: 15,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  statusCard: {
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  statusDescription: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 20,
  },
});
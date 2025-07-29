import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import { router } from 'expo-router';
import { User, MapPin, Phone, Trash2, LogOut, CreditCard as Edit } from 'lucide-react-native';

export default function SettingsScreen() {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, City',
    contactNumber: '+1234567890'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            // Navigate to OTP verification for account deletion
            Alert.alert('OTP Verification', 'Please check your email for OTP to confirm account deletion');
          }
        }
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          onPress: () => router.replace('/(auth)/login')
        }
      ]
    );
  };

  const handleSaveInfo = () => {
    setIsEditing(false);
    Alert.alert('Success', 'Your information has been updated');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>User Information</Text>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => setIsEditing(!isEditing)}
          >
            <Edit size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <User size={20} color="#000" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Name</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={userInfo.name}
                  onChangeText={(text) => setUserInfo({...userInfo, name: text})}
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.name}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <User size={20} color="#000" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{userInfo.email}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MapPin size={20} color="#000" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Address</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={userInfo.address}
                  onChangeText={(text) => setUserInfo({...userInfo, address: text})}
                  multiline
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.address}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <Phone size={20} color="#000" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Contact Number</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={userInfo.contactNumber}
                  onChangeText={(text) => setUserInfo({...userInfo, contactNumber: text})}
                  keyboardType="phone-pad"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.contactNumber}</Text>
              )}
            </View>
          </View>

          {isEditing && (
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveInfo}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Management</Text>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleDeleteAccount}>
          <Trash2 size={20} color="#ff4444" style={styles.actionIcon} />
          <Text style={[styles.actionText, { color: '#ff4444' }]}>Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
          <LogOut size={20} color="#000" style={styles.actionIcon} />
          <Text style={styles.actionText}>Logout</Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  editButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoIcon: {
    marginRight: 15,
    marginTop: 2,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  infoInput: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 8,
  },
  saveButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 10,
  },
  actionIcon: {
    marginRight: 15,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
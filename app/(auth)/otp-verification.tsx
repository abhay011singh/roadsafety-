import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState('');
  const params = useLocalSearchParams();
  const { email, username, password } = params;

  const handleVerifyOTP = () => {
    if (!otp.trim()) {
      Alert.alert('Error', 'Please enter OTP');
      return;
    }
    
    // In a real app, verify OTP with backend
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => router.push('/(auth)/login') }
    ]);
  };

  const resendOTP = () => {
    Alert.alert('OTP Sent', 'A new OTP has been sent to your email');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Email Verification</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to {email}
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>OTP Code</Text>
          <TextInput
            style={styles.input}
            value={otp}
            onChangeText={setOtp}
            placeholder="Enter 6-digit OTP"
            placeholderTextColor="#666"
            keyboardType="numeric"
            maxLength={6}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={resendOTP}>
          <Text style={styles.linkText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#000',
    fontSize: 16,
  },
});
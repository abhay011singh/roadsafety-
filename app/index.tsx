import { View, Text, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/(auth)/login" />;
}
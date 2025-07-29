import { Stack } from 'expo-router';

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="call-detection" />
      <Stack.Screen name="sos-services" />
    </Stack>
  );
}
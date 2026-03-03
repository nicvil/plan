import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="links/new" options={{ presentation: 'modal' }} />
      <Stack.Screen name="scanner" options={{ presentation: 'fullScreenModal' }} />
      <Stack.Screen name="utm-builder" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QRCodesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 }}>
          QR Codes
        </Text>
        <View
          style={{
            backgroundColor: '#1a1a24',
            borderRadius: 16,
            padding: 24,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#6b7280' }}>No QR codes yet. Create a link to generate one.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

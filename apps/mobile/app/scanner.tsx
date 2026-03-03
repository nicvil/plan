import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScannerScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 }}>
          QR Scanner
        </Text>
        <Text style={{ fontSize: 16, color: '#9ca3af', textAlign: 'center', marginBottom: 24 }}>
          Point your camera at a QR code to scan it
        </Text>
        <View
          style={{
            width: 250,
            height: 250,
            borderWidth: 2,
            borderColor: '#6366f1',
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#6b7280' }}>Camera preview</Text>
          <Text style={{ color: '#6b7280', fontSize: 12, marginTop: 4 }}>
            (Requires device camera)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

export default function QRCodeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 }}>
          QR Code
        </Text>

        {/* QR Code Preview */}
        <View
          style={{
            width: 250,
            height: 250,
            backgroundColor: '#ffffff',
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <Text style={{ color: '#6b7280' }}>QR Code Preview</Text>
          <Text style={{ color: '#6b7280', fontSize: 12 }}>ID: {id}</Text>
        </View>

        {/* Actions */}
        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#6366f1',
              borderRadius: 12,
              paddingHorizontal: 24,
              paddingVertical: 14,
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: '600' }}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#1a1a24',
              borderRadius: 12,
              paddingHorizontal: 24,
              paddingVertical: 14,
              borderWidth: 1,
              borderColor: '#374151',
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: '600' }}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

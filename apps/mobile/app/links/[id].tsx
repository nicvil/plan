import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

export default function LinkDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#ffffff', marginBottom: 4 }}>
            linkiq.app/example
          </Text>
          <Text style={{ fontSize: 14, color: '#9ca3af' }}>
            https://example.com/very-long-destination-url
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 12, gap: 8 }}>
            <View style={{ backgroundColor: '#10b981', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 }}>
              <Text style={{ color: '#ffffff', fontSize: 12 }}>Active</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
          {['Copy', 'Share', 'Edit', 'QR Code', 'Delete'].map((action) => (
            <TouchableOpacity
              key={action}
              style={{
                backgroundColor: action === 'Delete' ? '#ef4444' : '#1a1a24',
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginRight: 8,
              }}
            >
              <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '500' }}>{action}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Analytics */}
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#ffffff', marginBottom: 12 }}>
          Analytics
        </Text>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, padding: 24, alignItems: 'center' }}>
          <Text style={{ color: '#6b7280' }}>No click data yet for link {id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

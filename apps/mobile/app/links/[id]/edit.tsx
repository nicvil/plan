import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

export default function EditLinkScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 }}>
          Edit Link
        </Text>

        <View style={{ gap: 16 }}>
          <View>
            <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>Destination URL</Text>
            <TextInput
              placeholder="https://example.com"
              placeholderTextColor="#6b7280"
              autoCapitalize="none"
              keyboardType="url"
              style={{
                backgroundColor: '#1a1a24',
                borderRadius: 12,
                padding: 16,
                color: '#ffffff',
                borderWidth: 1,
                borderColor: '#374151',
              }}
            />
          </View>
          <View>
            <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>Title</Text>
            <TextInput
              placeholder="Link title"
              placeholderTextColor="#6b7280"
              style={{
                backgroundColor: '#1a1a24',
                borderRadius: 12,
                padding: 16,
                color: '#ffffff',
                borderWidth: 1,
                borderColor: '#374151',
              }}
            />
          </View>
          <View>
            <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>Slug</Text>
            <TextInput
              placeholder="custom-slug"
              placeholderTextColor="#6b7280"
              autoCapitalize="none"
              style={{
                backgroundColor: '#1a1a24',
                borderRadius: 12,
                padding: 16,
                color: '#ffffff',
                borderWidth: 1,
                borderColor: '#374151',
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#6366f1',
              borderRadius: 12,
              padding: 16,
              alignItems: 'center',
              marginTop: 8,
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>Save Changes</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ color: '#6b7280', fontSize: 12, marginTop: 16, textAlign: 'center' }}>
          Link ID: {id}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

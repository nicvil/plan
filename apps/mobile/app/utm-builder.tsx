import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UTMBuilderScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 }}>
          UTM Builder
        </Text>

        <View style={{ gap: 16 }}>
          {[
            { label: 'Website URL', placeholder: 'https://example.com' },
            { label: 'Campaign Source', placeholder: 'e.g. google, newsletter' },
            { label: 'Campaign Medium', placeholder: 'e.g. cpc, email, social' },
            { label: 'Campaign Name', placeholder: 'e.g. spring_sale' },
            { label: 'Campaign Term', placeholder: 'e.g. running+shoes (optional)' },
            { label: 'Campaign Content', placeholder: 'e.g. logolink (optional)' },
          ].map((field) => (
            <View key={field.label}>
              <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>{field.label}</Text>
              <TextInput
                placeholder={field.placeholder}
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
          ))}
        </View>

        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, padding: 16, marginTop: 24 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#ffffff', marginBottom: 8 }}>
            Generated URL
          </Text>
          <Text style={{ fontSize: 13, color: '#9ca3af', fontFamily: 'monospace' }}>
            Enter a URL and campaign parameters above
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#6366f1',
            borderRadius: 12,
            padding: 16,
            alignItems: 'center',
            marginTop: 16,
            marginBottom: 32,
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>Copy URL</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

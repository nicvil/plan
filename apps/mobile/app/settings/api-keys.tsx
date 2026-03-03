import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function APIKeysScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 }}>
          API Keys
        </Text>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, padding: 24, alignItems: 'center' }}>
          <Text style={{ color: '#6b7280', textAlign: 'center' }}>
            API keys can only be created from the web dashboard for security reasons.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

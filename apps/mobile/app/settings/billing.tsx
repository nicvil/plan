import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BillingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 }}>
          Plan & Billing
        </Text>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <Text style={{ color: '#9ca3af', fontSize: 14 }}>Current Plan</Text>
          <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 'bold', marginTop: 4 }}>Free</Text>
          <View style={{ marginTop: 12 }}>
            <Text style={{ color: '#9ca3af', fontSize: 14 }}>25 links • 1,000 clicks/mo</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#6366f1',
            borderRadius: 12,
            padding: 16,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>Upgrade Plan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

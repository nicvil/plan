import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AnalyticsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 }}>
          Analytics
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
          {[
            { label: 'Today', value: '0' },
            { label: 'This Week', value: '0' },
            { label: 'This Month', value: '0' },
          ].map((stat) => (
            <View
              key={stat.label}
              style={{
                backgroundColor: '#1a1a24',
                borderRadius: 16,
                padding: 20,
                marginRight: 12,
                minWidth: 140,
              }}
            >
              <Text style={{ fontSize: 12, color: '#9ca3af' }}>{stat.label}</Text>
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginTop: 4 }}>
                {stat.value}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            backgroundColor: '#1a1a24',
            borderRadius: 16,
            padding: 24,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#6b7280' }}>No analytics data available yet.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

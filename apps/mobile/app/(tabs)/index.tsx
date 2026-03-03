import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffffff' }}>
            Good morning 👋
          </Text>
          <Text style={{ fontSize: 14, color: '#9ca3af', marginTop: 4 }}>
            {"Here's your overview"}
          </Text>
        </View>

        {/* Stats */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
          {[
            { label: 'Total Links', value: '0' },
            { label: 'Clicks Today', value: '0' },
            { label: 'Active QR Codes', value: '0' },
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

        {/* Quick Actions */}
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#ffffff', marginBottom: 12 }}>
          Quick Actions
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
          {[
            { label: 'Create Link', emoji: '🔗' },
            { label: 'Scan QR', emoji: '📷' },
            { label: 'UTM Builder', emoji: '🏷️' },
            { label: 'Invite Member', emoji: '👥' },
          ].map((action) => (
            <TouchableOpacity
              key={action.label}
              style={{
                backgroundColor: '#1a1a24',
                borderRadius: 12,
                padding: 16,
                width: '47%',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 24, marginBottom: 8 }}>{action.emoji}</Text>
              <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '500' }}>
                {action.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Links */}
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#ffffff', marginBottom: 12 }}>
          Recent Links
        </Text>
        <View
          style={{
            backgroundColor: '#1a1a24',
            borderRadius: 16,
            padding: 24,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#6b7280' }}>No links yet. Create your first link!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

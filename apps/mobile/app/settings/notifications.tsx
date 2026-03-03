import { View, Text, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 }}>
          Notifications
        </Text>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, overflow: 'hidden' }}>
          {[
            { label: 'Link Expiring', description: 'Notify when links are about to expire' },
            { label: 'Click Milestones', description: 'Celebrate when links hit click milestones' },
            { label: 'Team Invites', description: 'Notify when you receive workspace invitations' },
            { label: 'Link Health', description: 'Alert when destination URLs are broken' },
          ].map((item, index) => (
            <View
              key={item.label}
              style={{
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: index < 3 ? 1 : 0,
                borderBottomColor: '#374151',
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '500' }}>{item.label}</Text>
                <Text style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>{item.description}</Text>
              </View>
              <Switch
                trackColor={{ false: '#374151', true: '#6366f1' }}
                thumbColor="#ffffff"
                value={true}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

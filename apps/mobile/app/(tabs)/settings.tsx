import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 }}>
          Settings
        </Text>

        {/* Account Section */}
        <Text style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8, textTransform: 'uppercase' }}>
          Account
        </Text>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, marginBottom: 24, overflow: 'hidden' }}>
          {['Profile', 'Email', 'Password'].map((item, index) => (
            <TouchableOpacity
              key={item}
              style={{
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: index < 2 ? 1 : 0,
                borderBottomColor: '#374151',
              }}
            >
              <Text style={{ color: '#ffffff', fontSize: 16 }}>{item}</Text>
              <Text style={{ color: '#6b7280', fontSize: 20 }}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Workspace Section */}
        <Text style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8, textTransform: 'uppercase' }}>
          Workspace
        </Text>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, marginBottom: 24, overflow: 'hidden' }}>
          {['Switch Workspace', 'Team Members', 'Domains', 'Billing'].map((item, index) => (
            <TouchableOpacity
              key={item}
              style={{
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: index < 3 ? 1 : 0,
                borderBottomColor: '#374151',
              }}
            >
              <Text style={{ color: '#ffffff', fontSize: 16 }}>{item}</Text>
              <Text style={{ color: '#6b7280', fontSize: 20 }}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Appearance */}
        <Text style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8, textTransform: 'uppercase' }}>
          Appearance
        </Text>
        <View style={{ backgroundColor: '#1a1a24', borderRadius: 16, marginBottom: 24, overflow: 'hidden' }}>
          <View
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#ffffff', fontSize: 16 }}>Dark Mode</Text>
            <Switch
              trackColor={{ false: '#374151', true: '#6366f1' }}
              thumbColor="#ffffff"
              value={true}
            />
          </View>
        </View>

        {/* App Info */}
        <View style={{ alignItems: 'center', marginTop: 16, marginBottom: 32 }}>
          <Text style={{ color: '#6b7280', fontSize: 14 }}>LinkIQ v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

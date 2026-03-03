import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WorkspaceInviteScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13', justifyContent: 'center', padding: 24 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 48, marginBottom: 16 }}>📩</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 8 }}>
          Workspace Invitation
        </Text>
        <Text style={{ fontSize: 16, color: '#9ca3af', textAlign: 'center', marginBottom: 32 }}>
          {"You've been invited to join a workspace"}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#6366f1',
            borderRadius: 12,
            paddingHorizontal: 32,
            paddingVertical: 16,
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>Accept Invitation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#0f0f13' }}
    >
      <View style={{ marginBottom: 32 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
          Welcome back
        </Text>
        <Text style={{ fontSize: 16, color: '#9ca3af', textAlign: 'center', marginTop: 8 }}>
          Sign in to your LinkIQ account
        </Text>
      </View>

      <View style={{ gap: 16 }}>
        <View>
          <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>Email</Text>
          <TextInput
            placeholder="you@example.com"
            placeholderTextColor="#6b7280"
            keyboardType="email-address"
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

        <View>
          <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>Password</Text>
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#6b7280"
            secureTextEntry
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
          <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

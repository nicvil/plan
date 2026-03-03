import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function ForgotPasswordScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#0f0f13' }}
    >
      <View style={{ marginBottom: 32 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
          Reset password
        </Text>
        <Text style={{ fontSize: 16, color: '#9ca3af', textAlign: 'center', marginTop: 8 }}>
          {"We'll send you a link to reset your password"}
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

        <TouchableOpacity
          style={{
            backgroundColor: '#6366f1',
            borderRadius: 12,
            padding: 16,
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

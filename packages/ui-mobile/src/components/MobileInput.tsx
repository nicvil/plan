import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

export interface MobileInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function MobileInput({ label, error, style, ...props }: MobileInputProps) {
  return (
    <View>
      {label && (
        <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>{label}</Text>
      )}
      <TextInput
        placeholderTextColor="#6b7280"
        style={[
          {
            backgroundColor: '#1a1a24',
            borderRadius: 12,
            padding: 16,
            color: '#ffffff',
            borderWidth: 1,
            borderColor: error ? '#ef4444' : '#374151',
          },
          style,
        ]}
        {...props}
      />
      {error && (
        <Text style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>{error}</Text>
      )}
    </View>
  );
}

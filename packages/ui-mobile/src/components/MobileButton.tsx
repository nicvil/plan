import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

export interface MobileButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const variantStyles: Record<string, { container: ViewStyle; text: TextStyle }> = {
  primary: {
    container: { backgroundColor: '#6366f1' },
    text: { color: '#ffffff' },
  },
  secondary: {
    container: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#374151' },
    text: { color: '#ffffff' },
  },
  danger: {
    container: { backgroundColor: '#ef4444' },
    text: { color: '#ffffff' },
  },
};

export function MobileButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}: MobileButtonProps) {
  const styles = variantStyles[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.container,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center' as const,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Text style={{ ...styles.text, fontWeight: '600', fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
}

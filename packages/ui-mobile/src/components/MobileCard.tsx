import React from 'react';
import { View, ViewStyle } from 'react-native';

export interface MobileCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function MobileCard({ children, style }: MobileCardProps) {
  return (
    <View
      style={{
        backgroundColor: '#1a1a24',
        borderRadius: 16,
        padding: 16,
        ...style,
      }}
    >
      {children}
    </View>
  );
}

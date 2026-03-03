import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';

const { width } = Dimensions.get('window');

const slides = [
  {
    title: 'Shorten any link in seconds',
    description: 'Create short, memorable links that are easy to share anywhere.',
    emoji: '🔗',
  },
  {
    title: 'Scan, share, and track QR codes',
    description: 'Generate custom QR codes and scan any code with your camera.',
    emoji: '📱',
  },
  {
    title: 'See who clicks, from where, on what',
    description: 'Powerful analytics to understand your audience and optimize performance.',
    emoji: '📊',
  },
];

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f13', justifyContent: 'center', padding: 24 }}>
      <View style={{ alignItems: 'center', marginBottom: 48 }}>
        <Text style={{ fontSize: 80, marginBottom: 24 }}>{slides[currentSlide].emoji}</Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: 12,
          }}
        >
          {slides[currentSlide].title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#9ca3af',
            textAlign: 'center',
            lineHeight: 24,
          }}
        >
          {slides[currentSlide].description}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 32 }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === currentSlide ? '#6366f1' : '#374151',
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={() => {
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          }
          // TODO: Navigate to login on last slide
        }}
        style={{
          backgroundColor: '#6366f1',
          borderRadius: 12,
          padding: 16,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

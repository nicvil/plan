import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const steps = ['URL & Title', 'Slug & Domain', 'Options', 'UTM Params', 'QR Code'];

export default function CreateLinkScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 }}>
          Create Link
        </Text>

        {/* Progress */}
        <View style={{ flexDirection: 'row', marginBottom: 24 }}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                height: 4,
                backgroundColor: index <= currentStep ? '#6366f1' : '#374151',
                borderRadius: 2,
                marginRight: index < steps.length - 1 ? 4 : 0,
              }}
            />
          ))}
        </View>

        <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 16 }}>
          Step {currentStep + 1}: {steps[currentStep]}
        </Text>
      </View>

      <ScrollView style={{ flex: 1, padding: 16 }}>
        {currentStep === 0 && (
          <View style={{ gap: 16 }}>
            <View>
              <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>Destination URL</Text>
              <TextInput
                placeholder="https://example.com/my-page"
                placeholderTextColor="#6b7280"
                autoCapitalize="none"
                keyboardType="url"
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
              <Text style={{ color: '#d1d5db', marginBottom: 4, fontSize: 14 }}>Title (optional)</Text>
              <TextInput
                placeholder="My awesome link"
                placeholderTextColor="#6b7280"
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
          </View>
        )}
      </ScrollView>

      {/* Navigation */}
      <View style={{ flexDirection: 'row', padding: 16, gap: 12 }}>
        {currentStep > 0 && (
          <TouchableOpacity
            onPress={() => setCurrentStep(currentStep - 1)}
            style={{
              flex: 1,
              borderRadius: 12,
              padding: 16,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#374151',
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            if (currentStep < steps.length - 1) {
              setCurrentStep(currentStep + 1);
            }
          }}
          style={{
            flex: 1,
            backgroundColor: '#6366f1',
            borderRadius: 12,
            padding: 16,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}>
            {currentStep === steps.length - 1 ? 'Create Link' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

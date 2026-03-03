import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LinksScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f13' }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 }}>
          Links
        </Text>

        {/* Search */}
        <TextInput
          placeholder="Search links..."
          placeholderTextColor="#6b7280"
          style={{
            backgroundColor: '#1a1a24',
            borderRadius: 12,
            padding: 14,
            color: '#ffffff',
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#374151',
          }}
        />

        {/* Filter Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
          {['All', 'Active', 'Expired', 'Protected'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={{
                backgroundColor: filter === 'All' ? '#6366f1' : '#1a1a24',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
              }}
            >
              <Text style={{ color: '#ffffff', fontSize: 14 }}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            backgroundColor: '#1a1a24',
            borderRadius: 16,
            padding: 24,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#6b7280' }}>No links yet. Tap + to create one.</Text>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: '#6366f1',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 8,
          shadowColor: '#6366f1',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        }}
      >
        <Text style={{ color: '#ffffff', fontSize: 28, fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

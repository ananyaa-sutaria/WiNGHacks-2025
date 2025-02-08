import { useState } from 'react';
import { StyleSheet, TextInput, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const scholarships = [
  { id: '1', name: 'STEM Excellence Scholarship' },
  { id: '2', name: 'Future Leaders Grant' },
  { id: '3', name: 'Diversity in Tech Award' },
  { id: '4', name: 'Women in Engineering Scholarship' },
  { id: '5', name: 'Community Service Scholarship' },
];

export default function ScholarshipScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={null}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Scholarship Hub</ThemedText>
      </ThemedView>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Scholarships..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredScholarships}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ThemedText style={styles.scholarshipItem}>{item.name}</ThemedText>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#000',
  },
  scholarshipItem: {
    paddingVertical: 8,
    fontSize: 16,
  },
});

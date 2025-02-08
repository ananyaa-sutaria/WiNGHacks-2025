import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  FlatList,
  View,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Text,
  ActivityIndicator
} from 'react-native';

const ScholarshipScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scholarships, setScholarships] = useState([
    { id: '1', name: 'STEM Scholarship', description: 'A great scholarship for STEM students' },
    { id: '2', name: 'Engineering Scholarship', description: 'A scholarship for Engineering students' },
    { id: '3', name: 'Medical Scholarship', description: 'A scholarship for Medical students' },
    // You can add more mock data or real data here
  ]);
  const [loading, setLoading] = useState(false);

  // Handle text input change and search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter scholarships based on the search query
  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle pressing a scholarship item
  const handlePress = (scholarship: any) => {
    const url = `https://www.ufl.edu/scholarships/${scholarship.id}`; // Example link structure for each scholarship
    Linking.openURL(url).catch((err) => console.error("Couldn't load the page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Scholarships..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Loading indicator or list */}
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={filteredScholarships}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.scholarshipItem}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.scholarshipName}>{item.name}</Text>
              <Text style={styles.scholarshipDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text>No scholarships found</Text>}
        />
      )}
    </SafeAreaView>
  );
};

// Styling for the Scholarship Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  scholarshipItem: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  scholarshipName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  scholarshipDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ScholarshipScreen;

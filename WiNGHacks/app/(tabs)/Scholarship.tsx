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
    { id: '1', name: 'Hispanic Scholarship Fund', description: 'Empowers hispanic students  with the knowledge and resources to successfully complete a higher education' },
    { id: '2', name: 'Society of Women Engineers Scholarship', description: 'Empowers women pursuing undergraduate and graduate degrees in engineering, engineering technology, and related fields.' },
    { id: '3', name: 'Machen Florida Opportunity Scholarship', description: 'Assists historically low-income first-generation college students in meeting their college costs.' },
    {id: '4', name: "Out to Innovate - LGBTQ+", description: 'Award scholarships to LGBTQ+ students currently enrolled in Science, Technology, Engineering, or Mathematics (STEM) or STEM-related teaching fields.'},
    {id: '5', name: "Tata - For Indian International Students", description: 'A need-based scholarship for Indian students to attend University in the United States.'},

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
    const url = `https://www.hsf.net/}`; // Example link structure for each scholarship
    Linking.openURL(url).catch((err) => console.error("Couldn't load the page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Scholarship Hub</Text>
        <Text style={styles.defaultText}>Search for scholarships by keyword.</Text>

      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Scholarships..."
        placeholderTextColor="black"
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
    backgroundColor: '#b3d9ff',
  },
  header: {
    backgroundColor: '#A1CEDC',  // Green background for the header
    padding: 70,
    borderRadius: 0,
    top: -50,
    height: 255,
    marginBottom: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    bottom: -30,
  },
  defaultText: {
    color: '#fff',
    fontSize: 18,
    bottom: -30,
    width: 270,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
    marginBottom: 40,
    backgroundColor: '#fff',
    marginTop: -20, // Added marginTop to move it down
  },
  scholarshipItem: {
    padding: 20,
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

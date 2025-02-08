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
    { id: '1', name: 'Hispanic scholarship fund Scholarship', description: 'Empowers students with the knowledge and resources to successfully complete a higher education', deadline: 'February 8, 2025', url: "https://www.hsf.net/scholarship" },
    { id: '2', name: 'SWE Scholarahip', description: 'SWE scholarships empower women pursuing undergraduate and graduate degrees in engineering, engineering technology, and related fields.', deadline: 'March 15, 2025', url: "https://swe.org/scholarships/" },
    { id: '3', name: 'Machen FLorida Opportunity Scholarship', description: 'Assists historically low-income first-generation college students in meeting their college costs.', deadline: 'Rolling Deadline', url:"https://www.sfa.ufl.edu/mfos/" },
    { id: '4', name: 'Out to Innovate - LGBTQ+', description: 'Award scholarships to LGBTQ+ students currently enrolled in STEM-related fields.', deadline: 'April 20, 2025', url:"https://oti.memberclicks.net/" },
    { id: '5', name: 'Tata - Indian International Students', description: 'A need-based scholarship for Indian students to attend University in the United States.', deadline: 'April 20, 2025', url: "https://www.tatatrusts.org/our-work/individual-grants-programme/education-grants" },
    { id: '6', name: 'UNCF - African Americans in STEM', description: 'A ten-year initiative designed to identify and provide scholarship and academic support for a total of 500 talented African American high school students who aspire to earn STEM degrees and to pursue careers in STEM fields.', url:'https://uncf.org/pages/stem-scholars-scholarship-overview'},
    { id: '7', name: 'Pathways to Science - Women in STEM', description: 'Available to undergraduate and graduate female students. You must be pursuing a degree in science, technology, engineering, or mathematics to be eligible for this $3,000 award.', url:'https://www.pathwaystoscience.org/programhub.aspx?sort=OPP-BHWGroup-WomenSTEM'}


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
  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load the page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scholarship Hub</Text>
        <Text style={styles.headerText}>Find your perfect match! 🔎</Text>
      </View>

      {/* Regular text above the search bar */}
      <Text style={styles.regularText}>A search feature to help you pay for the education you deserve</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Scholarships..."
        placeholderTextColor="#888"
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
              onPress={() => handlePress(item.url)}
            >
              <Text style={styles.scholarshipName}>{item.name}</Text>
              <Text style={styles.scholarshipDescription}>{item.description}</Text>
              <Text style={styles.scholarshipDeadline}>Deadline: {item.deadline}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No scholarships found</Text>}
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
    backgroundColor: '#BBDEFB', // Light blue background
  },
  header: {
    backgroundColor: '#90CAF9',  // Darker blue background for the header
    padding: 50,
    borderRadius: 20, // Rounded corners
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  headerTitle: {
    color: '#1E88E5', // Dark blue color
    fontSize: 32, // Increased font size
    fontWeight: 'bold', // Bold font weight
  },
  headerText: {
    color: '#1E88E5', // Dark blue color
    fontSize: 24,
    fontStyle: 'italic', // Italicized text
  },
  regularText: {
    color: '#1E88E5', // Dark blue color
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#64B5F6', // Light blue border
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 20, // Rounded corners
    marginBottom: 16,
    backgroundColor: '#FFFFFF', // White background
    marginTop: 40, // Added marginTop to move it down
    marginHorizontal: 16, // Added horizontal margin for spacing
  },
  scholarshipItem: {
    padding: 20,
    backgroundColor: '#FFFFFF', // White background
    marginBottom: 16, // Increased marginBottom for more space
    marginHorizontal: 16, // Added horizontal margin for spacing
    borderRadius: 20, // Increased borderRadius for more rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  scholarshipName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5', // Dark blue color
    marginBottom: 4,
  },
  scholarshipDescription: {
    fontSize: 14,
    color: '#1565C0', // Darker blue color
  },
  scholarshipDeadline: {
    fontSize: 14,
    color: '#1565C0', // Darker blue color
    marginTop: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: '#1E88E5', // Dark blue color
    fontSize: 18,
    marginTop: 20,
  },
});

export default ScholarshipScreen;
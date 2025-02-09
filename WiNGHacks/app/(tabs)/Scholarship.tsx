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
    { id: '2', name: 'SWE Scholarship', description: 'SWE scholarships empower women pursuing undergraduate and graduate degrees in engineering, engineering technology, and related fields.', deadline: 'March 15, 2025', url: "https://swe.org/scholarships/" },
    { id: '3', name: 'Machen Florida Opportunity Scholarship', description: 'Assists historically low-income first-generation college students in meeting their college costs.', deadline: 'Rolling Deadline', url:"https://www.sfa.ufl.edu/mfos/" },
    { id: '4', name: 'Out to Innovate - LGBTQ+', description: 'Award scholarships to LGBTQ+ students currently enrolled in STEM-related fields.', deadline: 'April 20, 2025', url:"https://oti.memberclicks.net/" },
    { id: '5', name: 'Tata - Indian International Students', description: 'A need-based scholarship for Indian students to attend University in the United States.', deadline: 'April 20, 2025', url: "https://www.tatatrusts.org/our-work/individual-grants-programme/education-grants" },
    { id: '6', name: 'UNCF - African Americans in STEM', description: 'A ten-year initiative designed to identify and provide scholarship and academic support for a total of 500 talented African American high school students who aspire to earn STEM degrees and to pursue careers in STEM fields.', deadline: 'May 1, 2025', url:'https://uncf.org/pages/stem-scholars-scholarship-overview'},
    { id: '7', name: 'Pathways to Science - Women in STEM', description: 'Available to undergraduate and graduate female students. You must be pursuing a degree in science, technology, engineering, or mathematics to be eligible for this $3,000 award.', deadline: 'June 1, 2025', url:'https://www.pathwaystoscience.org/programhub.aspx?sort=OPP-BHWGroup-WomenSTEM'}
  ]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load the page", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scholarship Hub</Text>
        <Text style={styles.headerText}>Find your perfect match! 🔎</Text>
      </View>

      <Text style={styles.regularText}>A search feature to help you pay for the education you deserve</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search Scholarships..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={handleSearch}
      />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#90CAF9', 
  },
  header: {
    backgroundColor: '#A1CEDC',  
    padding: 50,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  headerTitle: {
    color: '#000000', 
    fontSize: 32, 
    fontWeight: 'bold', 
  },
  headerText: {
    color: '#000000', 
    fontSize: 24,
    fontStyle: 'italic', 
  },
  regularText: {
    color: 'white', 
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    padding: 10,
    fontWeight: "bold",
  },
  searchBar: {
    height: 40,
    borderColor: '#64B5F6', 
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 20, 
    marginBottom: 16,
    backgroundColor: '#FFFFFF', 
    marginTop: 40, 
    marginHorizontal: 16, 
  },
  scholarshipItem: {
    padding: 20,
    backgroundColor: '#FFFFFF', 
    marginBottom: 16, 
    marginHorizontal: 16, 
    borderRadius: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  scholarshipName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5', 
    marginBottom: 4,
  },
  scholarshipDescription: {
    fontSize: 14,
    color: '#1565C0', 
  },
  scholarshipDeadline: {
    fontSize: 14,
    color: '#1565C0', 
    marginTop: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: '#1E88E5', 
    fontSize: 18,
    marginTop: 20,
  },
});

export default ScholarshipScreen;
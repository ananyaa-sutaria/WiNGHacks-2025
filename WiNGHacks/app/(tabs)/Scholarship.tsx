import { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  FlatList, 
  ActivityIndicator,
  View,
  ScrollView,
  Platform,
  SafeAreaView,
  useColorScheme,
  Pressable,
  Modal,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Scholarship {
  id: string;
  name: string;
  college?: string;
  year?: number;
  description?: string;
}

// Custom Dropdown Component
const Dropdown = ({ 
  label, 
  data, 
  value, 
  onSelect 
}: { 
  label: string; 
  data: string[]; 
  value: string; 
  onSelect: (item: string) => void; 
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <ThemedText style={styles.dropdownLabel}>{label}</ThemedText>
      <Pressable
        style={styles.dropdownButton}
        onPress={() => setVisible(true)}
      >
        <ThemedText style={styles.dropdownButtonText}>{value}</ThemedText>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1} 
          onPress={() => setVisible(false)}
        >
          <View style={styles.modalContent}>
            <ScrollView>
              {data.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.modalItem}
                  onPress={() => {
                    onSelect(item);
                    setVisible(false);
                  }}
                >
                  <ThemedText style={styles.modalItemText}>{item}</ThemedText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

// UF Colleges based on their website
const UF_COLLEGES = [
  "All Colleges",
  "Agricultural and Life Sciences",
  "Arts",
  "Business",
  "Dental Medicine",
  "Design, Construction and Planning",
  "Education",
  "Engineering",
  "Health and Human Performance",
  "Journalism and Communications",
  "Law",
  "Liberal Arts and Sciences",
  "Medicine",
  "Nursing",
  "Pharmacy",
  "Public Health and Health Professions",
  "Veterinary Medicine"
];

const STUDY_YEARS = ["All Years", "1", "2", "3", "4", "5"];

export default function ScholarshipScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCollege, setSelectedCollege] = useState("All Colleges");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [error, setError] = useState<string | null>(null);
  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.example.com/scholarships');
        if (!response.ok) {
          throw new Error('Failed to fetch scholarships');
        }
        const data: Scholarship[] = await response.json();
        // Log the data to inspect the structure
        console.log('Fetched scholarships:', data);
        setScholarships(data);
      } catch (error) {
        console.error('Error fetching scholarships:', error);
        setError('Failed to load scholarships. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  const filteredScholarships = scholarships.filter(scholarship => {
    const searchText = searchQuery.toLowerCase();
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchText) ||
      (scholarship.description && scholarship.description.toLowerCase().includes(searchText));
    const matchesCollege = selectedCollege === "All Colleges" || scholarship.college === selectedCollege;
    const matchesYear = selectedYear === "All Years" || scholarship.year === parseInt(selectedYear);
    return matchesSearch && matchesCollege && matchesYear;
  });

  const renderFilters = () => (
    <View style={styles.filtersContainer}>
      <Dropdown
        label="College"
        data={UF_COLLEGES}
        value={selectedCollege}
        onSelect={setSelectedCollege}
      />
      <Dropdown
        label="Year"
        data={STUDY_YEARS}
        value={selectedYear}
        onSelect={setSelectedYear}
      />
    </View>
  );
  const openHispanicScholarshipFund = () => {
    Linking.openURL('https://www.hsf.net/'); // Link to Hispanic Scholarship Fund
  };
  const openTrio = () => {
    Linking.openURL('https://oas.aa.ufl.edu/programs/uf-student-support-services/trio-honor-society/'); // Link to Hispanic Scholarship Fund
  };
  const openSwe = () => {
    Linking.openURL('https://swe.org/scholarships-timeline/'); // Link to Hispanic Scholarship Fund
  };
  const openMFOS = () => {
    Linking.openURL("https://www.sfa.ufl.edu/mfos/#:~:text=The%20Machen%20Florida%20Opportunity%20Scholarship,have%20earned%20a%20bachelor's%20degree."); // Link to Hispanic Scholarship Fund
  };

  const headerBackgroundColor = colorScheme === 'dark' ? '#353636' : '#D0D0D0';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: headerBackgroundColor }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" style={styles.centeredText}>Scholarship Hub</ThemedText>
            <ThemedText style={[styles.centeredText, { marginTop: 8 }]}>Find your perfect match! 🔎</ThemedText>
          </ThemedView>

          <TextInput
            style={styles.searchBar}
            placeholder="Search Scholarships..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {renderFilters()}

          {error ? (
            <ThemedText style={styles.errorText}>{error}</ThemedText>
          ) : loading ? (
            <ActivityIndicator size="large" color="#000" style={styles.loader} />
          ) : (
            <FlatList
              data={filteredScholarships}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ThemedView style={styles.scholarshipItem}>
                  <ThemedText style={styles.scholarshipName}>{item.name}</ThemedText>
                  {item.college && (
                    <ThemedText style={styles.scholarshipDetails}>College: {item.college}</ThemedText>
                  )}
                  {item.year && (
                    <ThemedText style={styles.scholarshipDetails}>Year: {item.year}</ThemedText>
                  )}
                </ThemedView>
              )}
              ListEmptyComponent={
                <ThemedText style={styles.emptyText}>No scholarships found</ThemedText>
              }
              scrollEnabled={false}
              nestedScrollEnabled={false}
            />
          )}

        <TouchableOpacity style={styles.button} onPress={openHispanicScholarshipFund}>

            <ThemedText style={[styles.buttonText, { fontWeight: 'bold' }]}>
              Hispanic Scholarship Fund
            </ThemedText>
            <ThemedText>Deadline: February 18</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openTrio}>
          <ThemedText style={[styles.buttonText, { fontWeight: 'bold' }]}>
            UF TRiO Student Support 
            </ThemedText>
            <ThemedText> Deadline: Febraury 28</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openSwe}>
          <ThemedText style={[styles.buttonText, { fontWeight: 'bold' }]}>
              Society of Women Engineers
            </ThemedText>
            <ThemedText> Deadline: Various Dates</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openMFOS}>
          <ThemedText style={[styles.buttonText, { fontWeight: 'bold' }]}>
              Machen Florida Opportunity Scholarship
            </ThemedText>
            <ThemedText> Deadline: April 7</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
        alignItems: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  filtersContainer: {
    marginBottom: 16,
    gap: 12,
  },
  dropdownContainer: {
    marginBottom: 8,
  },
  dropdownLabel: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: '80%',
  },
  modalItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalItemText: {
    fontSize: 16,
  },
  scholarshipItem: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  scholarshipName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  scholarshipDetails: {
    fontSize: 14,
    color: '#666',
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',
    borderRadius: 18, // Rounded edges
    shadowColor: '#000', // Optional shadow for depth
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '500',
  },
  centeredText: {
    textAlign: 'center',
  },
});
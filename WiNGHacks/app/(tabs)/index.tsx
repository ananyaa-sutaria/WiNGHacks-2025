import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import the correct type
import { RootTabParamList } from './types'; // Import the type for your screens

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


type Navigation = NativeStackNavigationProp<RootTabParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<Navigation>(); // Ensure correct typing here



  // Function to navigate to another tab
  const navigateToChatbot = () => {
    navigation.navigate('Chatbot'); // Ensure 'Chatbot' is part of your RootTabParamList type
  };
  const navigateToCalendar = () => {
    navigation.navigate('Calendar'); // Ensure 'Chatbot' is part of your RootTabParamList type
  };
  const navigateToAScholarship = () => {
    navigation.navigate('Scholarship'); // Ensure 'Chatbot' is part of your RootTabParamList type
  };
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#aae6ca', dark: '#aae6ca' }}
    headerImage={
      <ThemedView style={styles.headerImageContainer}>
        <Image
          source={require('@/assets/images/profile.png')}
          style={styles.reactLogo}
        />
        <ThemedText style={styles.headerOverlayText}>Welcome, USER!</ThemedText>
      </ThemedView>
    }>
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Welcome!</ThemedText>
      <HelloWave />
    </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ask KAPA:</ThemedText>
        <TouchableOpacity style={styles.linkButton} onPress={navigateToChatbot}>
        <ThemedText type="link">Navigate to KAPA!</ThemedText>
      </TouchableOpacity>
        
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">View Student Org Calendar:</ThemedText>
        <TouchableOpacity style={styles.linkButton} onPress={navigateToCalendar}>
        <ThemedText type="link">Navigate to Calendar!</ThemedText>
      </TouchableOpacity>
      </ThemedView>
      <ThemedView> 
      <ThemedText type="subtitle">View Scholarships:</ThemedText>
      <TouchableOpacity style={styles.linkButton} onPress={navigateToAScholarship}>
        <ThemedText type="link">Navigate to Scholarships!</ThemedText>
        
      </TouchableOpacity>
      </ThemedView>
     
        
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImageContainer: {
    position: 'relative',
    backgroundColor: '#A1CEDC', // This is the color you're applying to the top of the header
    paddingTop: 20, // You can adjust this to move the text lower or higher
    paddingBottom: 90,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 150,
    width: '40%',
    bottom: -55,
    left: 10,
  },
  headerOverlayText: {
    position: 'absolute',
    top: 150,
    width: "90%",
    left: 180,
    height: 100,
    color: '#00000', // White text color
    fontSize: 24,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#A1CEDC', // Optional button background color
    borderRadius: 5,
  },
});

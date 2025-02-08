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
    navigation.navigate('Chatbot'); 
  };
  const navigateToCalendar = () => {
    navigation.navigate('Calendar'); 
  };
  const navigateToAScholarship = () => {
    navigation.navigate('Scholarship'); 
  };
  const navigateToProfile = () => {
    navigation.navigate('Profile'); 
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
    <TouchableOpacity style={styles.profileButtom} onPress={navigateToProfile}>
    <Image
          source={require('@/assets/images/profile.png')}
          style={styles.buttonImage}
        />
        <ThemedText type="profile">View Your Profile!</ThemedText>
      </TouchableOpacity>
      

    </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ask KAPA:</ThemedText>
        <TouchableOpacity style={styles.linkButton} onPress={navigateToChatbot}>
        <Image
          source={require('@/assets/images/chatbot.png')}
          style={styles.buttonImage}
        />
        <ThemedText type="profile">Navigate to KAPA</ThemedText>
      </TouchableOpacity>
        
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">View Student Org Calendar:</ThemedText>
        <TouchableOpacity style={styles.linkButton} onPress={navigateToCalendar}>
        <Image
          source={require('@/assets/images/calendarpic.png')}
          style={styles.buttonImage}
        />
        <ThemedText type="profile">Navigate to Calendars</ThemedText>
      </TouchableOpacity>
      </ThemedView>
      <ThemedView> 
      <ThemedText type="subtitle">View Scholarships:</ThemedText>
      <TouchableOpacity style={styles.linkButton} onPress={navigateToAScholarship}>
      <Image
          source={require('@/assets/images/calendarpic.png')}
          style={styles.buttonImage}
        />
        <ThemedText type="profile">View Scholarships</ThemedText>
        
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
  buttonImage: {
    height: 50,
    width: 50,
    bottom: -20,
    left: -120,
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
    marginTop: 0,
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#A1CEDC', // Optional button background color
    borderRadius: 15,
  },
  profileButtom:{
    marginTop: 0,
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#84b6c5', // Optional button background color
    borderRadius: 15,
    fontWeight: 'bold',
  },
});

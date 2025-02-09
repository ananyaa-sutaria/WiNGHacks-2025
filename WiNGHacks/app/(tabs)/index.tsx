import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { RootTabParamList } from './types'; 

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


type Navigation = NativeStackNavigationProp<RootTabParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<Navigation>(); 



  // Function to navigate to another tab
  const navigateToChatbot = () => {
    navigation.navigate('Chatbot'); 
  };
  const navigateToCalendar = () => {
    navigation.navigate('Organizations'); 
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
          source={require('@/assets/images/profilepic.png')}
          style={styles.reactLogo}
        />
        <ThemedText style={styles.headerOverlayText}>Hello, Ananyaa!</ThemedText>
      </ThemedView>
    }>
       
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Welcome to GatorGuide</ThemedText>
      <HelloWave />
  
    </ThemedView>
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">About GatorGuide</ThemedText>
      <ThemedText type = "default">
      GatorGuide is a student-developed application designed to assist STEM students in organizing their academic endeavors. The app provides valuable information for STEM-related student organizations at the University of Florida, as well as scholarships 
      tailored to your identity and interests. Additionally, GatorGuide features KAPA, an AI-powered tool dedicated to addressing your personal questions and providing guidance.




      </ThemedText>

    </ThemedView>

    <ThemedView style={styles.stepContainer}>
    <TouchableOpacity style={styles.profileButtom} onPress={navigateToProfile}>
    <Image
          source={require('@/assets/images/profile.png')}
          style={styles.buttonImage}
        />
        <ThemedText type="profile">View Your Profile</ThemedText>
      </TouchableOpacity>
      

    </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity style={styles.linkButton} onPress={navigateToChatbot}>
        <Image
          source={require('@/assets/images/chatbot.png')}
          style={styles.buttonImage}
        />
        <ThemedText type="profile">Navigate to KAPA</ThemedText>
      </TouchableOpacity>
        
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity style={styles.linkButton} onPress={navigateToCalendar}>
        <Image
          source={require('@/assets/images/calendarpic.png')}
          style={styles.buttonImage}
        />
        <ThemedText type="profile">Navigate to Organizations</ThemedText>
      </TouchableOpacity>
      </ThemedView>
      <ThemedView> 
      <TouchableOpacity style={styles.linkButton} onPress={navigateToAScholarship}>
      <Image
          source={require('@/assets/images/scholarship.png')}
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
    backgroundColor: '#A1CEDC', 
    paddingTop: 20, 
    paddingBottom: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 12,
  },
  reactLogo: {
    height: 130,
    width: 130,
    bottom: -65,
    left: 25,
    borderRadius: 80,
    borderWidth: 2,

  },
  buttonImage: {
    height: 30,
    width: 30,
    bottom: -20,
    left: -120,
  },
  headerOverlayText: {
    position: 'absolute',
    top: 150,
    width: "90%",
    left: 180,
    height: 100,
    color: '#00000', 
    fontSize: 24,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 0,
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#A1CEDC', 
    shadowColor: '#000',          
    shadowOffset: { width: 0, height: 10 },  
    shadowOpacity: 0.3,           
    shadowRadius: 10, 
    borderRadius: 5,
    
    
  },
  profileButtom:{
    marginTop: 0,
    alignItems: 'center',
    padding: -6,
    backgroundColor: '#84b6c5', 
    borderRadius: 5,
    fontWeight: 'bold',
    shadowColor: '#000',         
    shadowOffset: { width: 0, height: 10 },  
    shadowOpacity: 0.3,           
    shadowRadius: 10, 
  },
});

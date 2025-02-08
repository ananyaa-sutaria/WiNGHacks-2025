import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import the correct type
import { RootTabParamList } from './types'; // Import the type for your screens
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#98fb98', dark: '#aae6ca' }}
      headerImage={
            <ThemedView style={styles.headerImageContainer}>
              <Image
                source={require('@/assets/images/profile.png')}
                style={styles.headerImage}
              />
              <ThemedText style={styles.headerOverlayText}>Profile</ThemedText>
            </ThemedView>
          }>
            
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> User name</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> user.email@domain.com</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> +1 (123)-456-7890</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> University of Florida</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> Field of Study</ThemedText>
      </ThemedView>
      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    stepContainer: {
        gap: 12,
        marginBottom: 15,
      },
  headerImage: {
    color: '#2e8b57',
    width: 150,
    height: 150,
    bottom: 10,
    left: 120,
    position: 'absolute',
  },
  stepImage: {
    color: '#2e8b57',
    width: 50,
    height: 50,
    bottom: 10,
    left: 120,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  headerOverlayText: {
    position: 'absolute',
    top: 70,
    width: "90%",
    left: 162,
    height: 100,
    color: '#00000', // White text color
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  headerImageContainer: {
    position: 'relative',
    backgroundColor: 'none', // This is the color you're applying to the top of the header
    paddingTop: 100, // You can adjust this to move the text lower or higher
    paddingBottom: 150,
  },
  text: {
    backgroundColor: '#90bac7',  // Set background color
    color: 'white',               // Set text color
    padding: 15,         
    left: 12,         // Add some padding around the text
    borderRadius: 0,              // Optional: Add rounded corners
    fontSize: 20,
    width: '90%',       
    textAlign: 'left',

    shadowColor: '#000',          // Shadow color (black)
    shadowOffset: { width: 0, height: 5 },  // Shadow offset (x, y)
    shadowOpacity: 0.3,           // Shadow opacity
    shadowRadius: 10,
  }
});

import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { RootTabParamList } from './types'; 
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#98fb98', dark: '#A1CEDC' }}
      headerImage={
            <ThemedView style={styles.headerImageContainer}>
              <Image
                source={require('@/assets/images/profilepic.png')}
                style={styles.headerImage}
              />
              <ThemedText style={styles.headerOverlayText}>Profile</ThemedText>
            </ThemedView>
          }>
            
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}>Ananyaa Sutaria</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> ananyaa.sutaria@ufl.edu</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> +1 (123)-456-7890</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> University of Florida</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}> Computer Science - HWCOE</ThemedText>
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
    width: 130,
    height: 130,
    bottom: 15,
    left: 132,
    borderRadius: 80,
    borderWidth: 2,
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
    color: '#00000',
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  headerImageContainer: {
    position: 'relative',
    backgroundColor: 'none', 
    paddingTop: 100, 
    paddingBottom: 150,
  },
  text: {
    backgroundColor: '#90bac7',  
    color: 'white',               
    padding: 15,         
    left: 12,         
    borderRadius: 0,              
    fontSize: 16,
    width: '90%',       
    textAlign: 'left',

    shadowColor: '#000',          
    shadowOffset: { width: 0, height: 5 },  
    shadowOpacity: 0.3,           
    shadowRadius: 10,
  }
});

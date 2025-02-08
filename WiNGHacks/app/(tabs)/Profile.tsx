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
      headerBackgroundColor={{ light: '#98fb98', dark: '#2e8b57' }}
      headerImage={
        <Image
          source={require('@/assets/images/calendarpic.png')}  // Replace with your image path
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Calendar</ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#2e8b57',
    width: '40%',
    height: 150,
    bottom: 35,
    left: 115,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

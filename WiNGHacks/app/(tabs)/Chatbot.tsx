import { StyleSheet, Image, TextInput, Platform, View, TouchableOpacity} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import the correct type
import { RootTabParamList } from './types'; // Import the type for your screens

const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function TabTwoScreen() {
  const [chatbotResponse, setChatbotResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');

  const generateContent = async (input: string) => {
    setLoading(true);
    
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyBpyKAe7vUEVZ89A2HfmPHk6A1tAhrkchE");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(input);
      setChatbotResponse(result.response.text());
    }
    catch(error){
      console.error("error calling chatbot API: ", error);
      console.log("There was an error fetching the response.");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeText = (text: string) => {
    setUserInput(text);
    generateContent(text);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '##aae6ca', dark: '#A1CEDC' }}
      headerImage={
        <Image
          source={require('@/assets/images/chatbot.png')}  // Replace with your image path
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meet KAPA!</ThemedText>
      </ThemedView>
      
      <ThemedText>Have any STEM related questions to ask? Ask our ChatBot, KAPA! KAPA uses Artificial Intelligence to answer your questions, pulling knowledge together from all over the internet!</ThemedText>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Type your question..."
        placeholderTextColor="#888"
        value={userInput}
        onChangeText={handleChangeText}
        returnKeyType="search"
      />

      {/* Chatbot Response */}
      <View style={styles.chatbotResponseContainer}>
        {loading ? (
          <ThemedText type="default">Loading...</ThemedText> // Show loading text
        ) : (
          chatbotResponse ? (
            <ThemedText type="default">{chatbotResponse}</ThemedText> // Display the response
          ) : (
            <ThemedText type="default">No response available</ThemedText> // If no response
          )
        )}
      </View>
    </ParallaxScrollView>
  );
}

// Styling for the Chatbot Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#A1CEDC', // Updated to the new blue color
  },
  headerImage: {
    color: '#fffff',
    width: '45%',
    height: 200,
    bottom: 10,
    left: 107,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
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
  chatbotResponseContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 20, // Rounded corners
    marginHorizontal: 16, // Added horizontal margin for spacing
  },
  loadingText: {
    color: '#1E88E5', // Dark blue color
    fontSize: 18,
    textAlign: 'center',
  },
  chatbotResponseText: {
    color: '#1E88E5', // Dark blue color
    fontSize: 18,
    textAlign: 'center',
  },
  userInput: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 2,
    paddingLeft: 10,
    color: 'black',
  },
});

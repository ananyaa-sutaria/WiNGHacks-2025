import { StyleSheet, Image, TextInput, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import React, { useEffect, useState } from 'react';

const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function TabTwoScreen() {
  const [chatbotResponse, setChatbotResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); 
  const [userInput, setUserInput] = useState<string>('');

  const generateContent = async (input: string) => {
    setLoading(true); 

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyBpyKAe7vUEVZ89A2HfmPHk6A1tAhrkchE");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

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
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chat Bot</ThemedText>
      </ThemedView>
      <ThemedText>Have any STEM related questions to ask? Ask out ChatBot, KAPA!</ThemedText>

      <TextInput
style = {styles.userInput}
placeholder = "Type your question: "
value = {userInput}
onChangeText = {handleChangeText}
returnKeyType = "search"
/>

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

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  chatbotResponseContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  userInput: {
    height: 40, 
    borderColor: '#000000',
    borderWidth: 5, 
    paddingLeft: 10,
  },
});



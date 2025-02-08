import { StyleSheet, Image, TextInput, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
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
      headerBackgroundColor={{ light: '##aae6ca', dark: '#aae6ca' }}
      headerImage={
        <Image
          source={require('@/assets/images/chatbot.png')}  // Replace with your image path
          style={styles.headerImage}
        />
        
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meet KAPA!</ThemedText>
      </ThemedView>
      
      <ThemedText>Have any STEM related questions to ask? Ask out ChatBot, KAPA! KAPA uses Artifical Intelligence to answer your questions, pulling knowledge together from all over the internet!</ThemedText>
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
    color: '#aae6ca',
    width: '45%',
    height: 200,
    bottom: 10,
    left:107,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    //gap: 8,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
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
    borderWidth: 2,
    paddingLeft: 10,
    color:'fffff',
  },
  

});

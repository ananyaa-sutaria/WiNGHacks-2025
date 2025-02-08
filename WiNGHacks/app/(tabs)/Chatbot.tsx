import { StyleSheet, Image, TextInput, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import React, { useEffect, useState } from 'react';

<<<<<<< HEAD
const { GoogleGenerativeAI } = require("@google/generative-ai");

=======
>>>>>>> 68dae2a368e6495a948390b516043f6bb46ee935
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
      headerBackgroundColor={{ light: '##ffcc99', dark: '#b9dcff' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meet KAPA!</ThemedText>
      </ThemedView>
<<<<<<< HEAD
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
  


=======
      
      <ThemedText>Have any STEM related questions to ask? Ask out ChatBot, KAPA! KAPA uses Artifical Intelligence to answer your questions, pulling knowledge together from all over the internet!</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
>>>>>>> 68dae2a368e6495a948390b516043f6bb46ee935
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
<<<<<<< HEAD
    bottom: -90,
    left: -35,
=======
    width: '45%',
    height: 200,
    bottom: 10,
    left:107,
>>>>>>> 68dae2a368e6495a948390b516043f6bb46ee935
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
    borderWidth: 5, 
    paddingLeft: 10,
  },
});

<<<<<<< HEAD

=======
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateContent(){
  const genAI = new GoogleGenerativeAI("AIzaSyBpyKAe7vUEVZ89A2HfmPHk6A1tAhrkchE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const prompt = "Explain how AI works";


const result = await model.generateContent(prompt); 
console.log(result.response.text());

}
>>>>>>> 68dae2a368e6495a948390b516043f6bb46ee935

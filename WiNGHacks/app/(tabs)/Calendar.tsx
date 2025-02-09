import { StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { RootTabParamList } from './types'; 
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#aae6ca', dark: '#A1CEDC' }}
      headerImage={
        <Image
          source={require('@/assets/images/Adobe Express - file.png')}  
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Student Orgs</ThemedText>
      </ThemedView>
      <ThemedText>Want to find a space where you belong? Check out these student orgs down below to see their unique opportunities!!</ThemedText>
      
      <ThemedView style={styles.colorStack}>
          <Image
              source={require('@/assets/images/colorstack.png')}
              style={styles.firstOrg}
            />
            </ThemedView>
        <Collapsible title="ColorStack"> 
        <ThemedText>
          ColorStack is a safe space for Black and Latinx CS students. In their slack, they offer help on homework and give overall CS advice!!
          If you're looking for an opportunity to network, you can submit your resume with some of ColorStack's partner companies!! For more information, visit
          their website down below.
        </ThemedText>
        <ExternalLink href="https://colorstack-website-frontend.vercel.app/">
          <ThemedText type="link">Info Link</ThemedText>
        </ExternalLink>
      </Collapsible>
           

      <ThemedView style={styles.studentOrg}>
              <Image
                source={require('@/assets/images/csk4.png')}
                style={styles.firstOrg}
              />
            </ThemedView>
      <Collapsible title="CSK">
        <ThemedText>
          CSK, known as Computer Science Kickstart, is a club to help incoming freshman females become more confident 
          in their technical skills and ability to grow in the field of STEM!! For more information, visit
          their website down below.
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Info Link</ThemedText>
        </ExternalLink>
      </Collapsible>

      <ThemedView style={styles.studentOrg}>
              <Image
                source={require('@/assets/images/sase.png')}
                style={styles.firstOrg}
              />
            </ThemedView>

      <Collapsible title="SASE">
        <ThemedText>
          SASE, known as the Society of Asian Scientists and Engineers, is a club comitted to facilating purposeful connections across cultures 
          and to empowering Asian professionals in science and engineering!! They provide a nurturing learning environment for members to obtain 
          relative skills and knowledge to succeed in life after college. For more information, visit
          their website down below.
        </ThemedText>
        <ExternalLink href="https://ufsase.com/events">
          <ThemedText type="link">Info Link</ThemedText>
        </ExternalLink>
      </Collapsible>

      <ThemedView style={styles.studentOrg}>
              <Image
                source={require('@/assets/images/shpe.png')}
                style={styles.firstOrg}
              />
            </ThemedView>

      <Collapsible title="SHPE">
        <ThemedText>
          SPHE, known as the Society of Hispanic Professional Engineers, strives to provide an environment for Hispanics studying in the 
          STEM field. As a society, SPHE works to enrich members with opportunites to participate in outreach, corporate exposition meetings, academic
          programs, and non-technical events. For more information, visit
          their website down below.
        </ThemedText>
        <ExternalLink href="https://www.shpeuf.com/calendar">
          <ThemedText type="link">Info Link</ThemedText>
        </ExternalLink>
      </Collapsible>

      <ThemedView style={styles.studentOrg}>
              <Image
                source={require('@/assets/images/swe2.png')}
                style={styles.firstOrg}
              />
            </ThemedView>

      <Collapsible title="SWE">
        <ThemedText>
          SWE, known as the Society of Women Engineers, aims to encourage UF's female engineering students to reach their full potential as 
          engineers and leaders. They host workshops, create design teams, and coordinate career fairs throughout the school year. For more information, visit
          their website down below.
        </ThemedText>
        <ExternalLink href="https://uf.swe.org/">
          <ThemedText type="link">Info Link</ThemedText>
        </ExternalLink>
      </Collapsible>

      <ThemedView style={styles.studentOrg}>
              <Image
                source={require('@/assets/images/wece2.ppng.png')}
                style={styles.firstOrg}
              />
            </ThemedView>

      <Collapsible title="WECE">
        <ThemedText>
          WECE, known as Women in Electrical and Computer Engineering, endeavors to create a community where women could seek support and advice reagarding their academic, professional and personal lives!! They acomplish 
          this through holding coporate events, technical activities, and dual mentorship programs. For more information, visit
          their website down below.
        </ThemedText> 
        <ExternalLink href="http://www.wece.ece.ufl.edu/">
          <ThemedText type="link">Info Link</ThemedText>
        </ExternalLink>
      </Collapsible>

      <ThemedView style={styles.studentOrg}>
              <Image
                source={require('@/assets/images/wicse2.png')}
                style={styles.firstOrg}
              />
            </ThemedView>

      <Collapsible title="WiCSE">
        <ThemedText>
          WiCSE, known as Women in Computer Science and Engineering, is a club that focuses on providing women opportunites to thrive in the world of computer
          science. They host technical workshops, create design teams, and participate in outreach with the local Gainesville community! For more information, visit
          their website down below.
        </ThemedText>
        <ExternalLink href="https://ufwicse.com/events">
          <ThemedText type="link">Info Link</ThemedText>
        </ExternalLink>
      </Collapsible>
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
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    //gap: 8,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  firstOrg: {
    color: '#A1CEDC',
    fontSize: 14,
    marginBottom: 8,
  },
  colorStack: {
    alignItems: 'center',
    backgroundColor: '#b3d9ff',
    right: 5, 
  },
  studentOrg: {
    alignItems: 'center',
    paddingTop: 20,
    right: 5,
  }

});

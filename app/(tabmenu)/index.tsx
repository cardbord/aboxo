import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { useState } from "react";
import * as Notifications from "expo-notifications";
import {useLocalNotification} from "@/hooks/useLocalNotification"
import { schedulePushNotification } from "@/utils/handle-local-notifications"; 
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});


var timePeriodvariable = 1;



export default function Index() {
  
  useLocalNotification();
  const handleLocalPushNotification = async() => {
    await schedulePushNotification(timePeriodvariable);
  
  }
  
  


  return (

    <ParallaxScrollView
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    headerImage={
      <Image
        source={require('@/assets/images/backg.jpg')}
        style={styles.headerImage}
      />
    }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" darkColor="pink">
            welcome back!
            <ThemedText type="title" darkColor="lightblue">
            {' '}(•ᴗ•✿)
            </ThemedText>
        </ThemedText>
      </ThemedView>

      

      <ThemedView style={styles.stepContainer}>

      <Collapsible title="montag">
        <ThemedText type='subtitle' darkColor='lightblue'>
          8:35 - 9:00
        </ThemedText>
      <ThemedText>
        form time {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          9:00 - break
        </ThemedText>
      <ThemedText>
        double physics {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          10:45 - 11:10
        </ThemedText>
      <ThemedText>
        break {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          11:10 - 12:00
        </ThemedText>
      <ThemedText>
        freee ! {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          12:00 - lunch
        </ThemedText>
      <ThemedText>
        math (amlani) (lecturerooms) {'\n'}
      </ThemedText>
        <ThemedText type='subtitle' darkColor='pink'>
          12:55 - 1:30
        </ThemedText>
      <ThemedText>
        eat lunchean {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          1:30 - 2:10
        </ThemedText>
      <ThemedText>
        goto math club {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          2:10 - 3:05
        </ThemedText>
      <ThemedText>
        math (myers) (room down the corridor) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          3:05 - end
        </ThemedText>
      <ThemedText>
        freee ! {'\n'}
      </ThemedText>
      </Collapsible>
      </ThemedView>

      <Text>{'\n'}</Text>

      <ThemedView style={styles.stepContainer}>

      <Collapsible title="dienstag">
      <ThemedText type='subtitle' darkColor='pink'>
          8:35
        </ThemedText>
      <ThemedText>
        form time {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          9:00 - 9:50
        </ThemedText>
      <ThemedText>
        pshe (maybe) (check week a or b) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          9:50 - break
        </ThemedText>
      <ThemedText>
        disc maths (amlani) (lecturerooms) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          10:45 - 11:10
        </ThemedText>
      <ThemedText>
        break {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          11:10 - lunch
        </ThemedText>
      <ThemedText>
        double compute (mattu + mccunn) (it1) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          12:55 - 2:10
        </ThemedText>
      <ThemedText>
        eat luncheon {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          2:10 - end
        </ThemedText>
      <ThemedText>
        double physics {'\n'}
      </ThemedText>

      </Collapsible>

      </ThemedView>      

      <Text>{'\n'}</Text>

      <ThemedView style={styles.stepContainer}>

      <Collapsible title="mittwoch">
      <ThemedText type='subtitle' darkColor='lightblue'>
          8:35
        </ThemedText>
      <ThemedText>
        form time {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          9:00 - 9:50
        </ThemedText>
      <ThemedText>
        maths (myers) (room down the corridor) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          9:50 - break
        </ThemedText>
      <ThemedText>
        maths (barge) (m1) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          10:45 - 11:10
        </ThemedText>
      <ThemedText>
        break {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          11:10 - 12:00
        </ThemedText>
      <ThemedText>
        fap maths (myers) (room down the corridor) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          12:00 - 12:55
        </ThemedText>
      <ThemedText>
        freee ! {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          12:55 - 1:35
        </ThemedText>
      <ThemedText>
        eat luncheon {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          1:35 - end
        </ThemedText>
      <ThemedText>
        end games {'\n'}
      </ThemedText>

      </Collapsible>

      </ThemedView>  

      <Text>{'\n'}</Text>

      <ThemedView style={styles.stepContainer}>

      <Collapsible title="donnerstag">
      <ThemedText type='subtitle' darkColor='lightblue'>
          8:35
        </ThemedText>
      <ThemedText>
        form time {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          9:00 - break
        </ThemedText>
      <ThemedText>
        compute (it1) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          10:45 - 11:10
        </ThemedText>
      <ThemedText>
        break {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          11:10 - 12:00
        </ThemedText>
      <ThemedText>
        physics (moyes) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          12:00 - 12:55
        </ThemedText>
      <ThemedText>
        freee (yay!) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          12:55 - 2:10
        </ThemedText>
      <ThemedText>
        eat luncheon {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          2:10 - 3:05
        </ThemedText>
      <ThemedText>
        math (amlan) (lecturerooms) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          3:05 - end
        </ThemedText>
      <ThemedText>
        math (barg) (m1) {'\n'}
      </ThemedText>


      </Collapsible>

      </ThemedView>  

      <Text>{'\n'}</Text>

      <ThemedView style={styles.stepContainer}>

      <Collapsible title="day before saturday">
      <ThemedText type='subtitle' darkColor='lightblue'>
          8:35
        </ThemedText>
      <ThemedText>
        form time {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor="pink">
          9:00 - 9:50
        </ThemedText>
      <ThemedText>
        math (amlan) (lecturerooms) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          9:50 - 10:45
        </ThemedText>
      <ThemedText>
        math (myer) (room down the hall) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          10:45 - 11:10
        </ThemedText>
      <ThemedText>
        prefECT DUtY {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          11:10 - lunch
        </ThemedText>
      <ThemedText>
        double compute (mattu) (it1) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          12:55 - 1:30
        </ThemedText>
      <ThemedText>
        eat luncheon {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          1:30 - 2:10
        </ThemedText>
      <ThemedText>
        john cipher (it2) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='pink'>
          2:10 - 3:05
        </ThemedText>
      <ThemedText>
        physics (blaker) {'\n'}
      </ThemedText>
      <ThemedText type='subtitle' darkColor='lightblue'>
          3:05 - end
        </ThemedText>
      <ThemedText>
        end interest options (changes over time) {'\n'}
      </ThemedText>


      </Collapsible>

      </ThemedView>  

      <Text>{'\n'}</Text>


      <Pressable style={styles.button} onPress={handleLocalPushNotification}>
      
      <Text>{ "do NOT press this" }</Text>
      
    </Pressable>      
    
          
    


    </ParallaxScrollView>


    
  );
};


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    position:"relative"
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

});

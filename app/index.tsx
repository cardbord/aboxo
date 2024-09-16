import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { useState } from "react";
import * as Notifications from "expo-notifications";
import {useLocalNotification} from "@/hooks/useLocalNotification"
import { schedulePushNotification } from "@/utils/handle-local-notifications"; 
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from '@expo/vector-icons/Ionicons';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});


var timePeriodvariable = 1;



export default function Index() {
  const [date, setDate] = useState(new Date());
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
      <ThemedText>boxoapp test</ThemedText>
      <ThemedText>hey guys i made an app</ThemedText>

      <ThemedView>

      <Collapsible title="mONTAG">
      <ThemedText>
        8:35 form time
      </ThemedText>
      <ThemedText>
        9:00 - break double physics  
      </ThemedText>
      <ThemedText>
        10:45 - 11:10 break
      </ThemedText>
      <ThemedText>
        11:10 - 12:00 freee !
      </ThemedText>
      <ThemedText>
        12:00 - lunch math (amlani) (lecture rooms)  
      </ThemedText>
      <ThemedText>
        12:55 - 1:30 eat luncheon
      </ThemedText>
      <ThemedText>
        1:30 - 2:10 goto math club  
      </ThemedText>
      <ThemedText>
        2:10 - 3:05 math (myers) (room down the corridor)
      </ThemedText>
      <ThemedText>
        3:05 - end freee !
      </ThemedText>
      </Collapsible>
      </ThemedView>

      
      <ThemedView>

      <Collapsible title="tuesd">
      <ThemedText>
        8:35 form time
      </ThemedText>
      <ThemedText>
        9:00 - 9:50 pshe (maybe) (check week a or b)
      </ThemedText>
      <ThemedText>
        9:50 - break disc maths (amlani)
      </ThemedText>
      <ThemedText>
        10:45 - 11:10 break
      </ThemedText>
      <ThemedText>
        11:10 - lunch double compute (mattu + mccunn) (it1)
      </ThemedText>
      <ThemedText>
        12:55 - 2:10 eat luncheon
      </ThemedText>
      <ThemedText>
        2:10 - end double physics
      </ThemedText>

      </Collapsible>

      </ThemedView>      

      <ThemedView>

      <Collapsible title="wednes day">
      <ThemedText>
        8:35 form time
      </ThemedText>
      <ThemedText>
        9:00 - 9:50 maths (myers) (room down the corridor)
      </ThemedText>
      <ThemedText>
        9:50 - break maths (barge) (m1)
      </ThemedText>
      <ThemedText>
        10:45 - 11:10 break
      </ThemedText>
      <ThemedText>
        11:10 - 12:00 fap maths (myers) (room down the corridor)
      </ThemedText>
      <ThemedText>
        12:00 - 12:55 freee !
      </ThemedText>
      <ThemedText>
        12:55 - 1:35 eat luncheon
      </ThemedText>
      <ThemedText>
        1:35 - end games
      </ThemedText>

      </Collapsible>

      </ThemedView>  



      <Pressable style={styles.button} onPress={handleLocalPushNotification}>
      
      <Text>{"do NOT press this" }</Text>
      
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

});







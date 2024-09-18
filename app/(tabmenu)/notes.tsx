import { Text, View, Pressable, StyleSheet, Image, TextInput } from "react-native";
import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import {useLocalNotification} from "@/hooks/useLocalNotification"
import { schedulePushNotification } from "@/utils/handle-local-notifications"; 
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { getItem, setItem } from "@/utils/AsyncStorage"



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

var f = 'f'

   



export default function NotesPage() {
     
     const [value, onChangeText] = useState('');

     useEffect(() => {
          (async () => {
               try {
               f = await getItem('fval');
               if (f!== null) {
                    onChangeText(f)
               }
               }
               catch (error) {
                    console.log('uh oh', error);
               }
               
     
          })();
          
     
     }, []);
     
     const saveData = async () => {
          try {
               const toLog = value
               await setItem('fval',toLog)
          }
          catch (error) {
               console.log('uh oh', error)
          }
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
                    <ThemedText type="title" darkColor="lightblue">
                         not
                         <ThemedText type="title" darkColor="pink">es!</ThemedText>
                    </ThemedText>
                    </ThemedView>

                    <ThemedView>
                         
                         <TextInput
                              editable
                              multiline
                              numberOfLines={4}
                              maxLength={4000}
                              onChangeText={text => {onChangeText(text); saveData();}}
                              value={value}
                              style={{padding: 10, color: 'pink'}}
                         />

                         


                    </ThemedView>      



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

})
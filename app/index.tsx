import { Text, View, Permission, Platform, Button } from "react-native";
import { useState } from "react";
import * as Notifications from "expo-notifications";
import {useLocalNotification} from "@/hooks/useLocalNotification"
import { schedulePushNotification } from "@/utils/handle-local-notifications"; 


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

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>boxoapp test</Text>
      
      <Text>hey guys i made an app</Text>

      

      <Button
      title="do NOT press this"
      onPress={handleLocalPushNotification}
    />      
    
          
    


    </View>


    
  );
};









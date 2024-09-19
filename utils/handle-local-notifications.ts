import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export const schedulePushNotification = async (timePeriod:number) => {
  await Notifications.scheduleNotificationAsync({
    identifier: "something",
    content: {
      title: "im notifying u",
      subtitle: "heyy there",
      body: "u can never escape :3"
    },
    trigger: {
      seconds: timePeriod,
      repeats: true,
    }
  });
};

export const schedulePushNotificationNonRepeat = async (dateTime:any, contentData:any) => {
  await Notifications.scheduleNotificationAsync({
    identifier: "notif",
    content: contentData,
    trigger: {
      date:dateTime,
    }
  });
};


export const registerForPushNotificationsAsync = async () => {
  let token: string = "";

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FFAABBCC"
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
};
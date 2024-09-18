import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Stack, Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function RootLayout() {
  return (
    <Tabs 
    screenOptions={{
      headerShown: false,
    }}
    >
      <Tabs.Screen name="index" 
      options={{
        title: 'Schedule',
        tabBarIcon: ({ color, focused }) => (
          <FontAwesome6 name={focused ? "box-open" : "box"} size={24} color={color} />
          
        ),
      }}
      />

      <Tabs.Screen name="notes" 
      options={{
        title: 'Notes',
        tabBarIcon: ({ color, focused }) => (
          <FontAwesome6 name={focused ? "box-open" : "box"} size={24} color={color} />
          
        ),
      }}
      />

    </Tabs>
  );
}

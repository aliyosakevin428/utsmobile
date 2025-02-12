import { View, Text } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { useSession } from "@/contexts/ctx";
import { Beef, House, Icon, User } from "lucide-react-native";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading . . .</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Beranda",
          title: "Beranda",
          tabBarIcon: ({ focused, size }) => (
            <House color={focused ? "#FFA500" : "gray"} size={size} />
          ),
          tabBarActiveTintColor: "#FFA500", // Active text color
          tabBarInactiveTintColor: "gray", // Inactive text color
        }}
      />
      <Tabs.Screen
        name="resep"
        options={{
          tabBarLabel: "Resep",
          title: "Resep",
          tabBarIcon: ({ focused, size }) => (
            <Beef color={focused ? "#FFA500" : "gray"} size={size} />
          ),
          tabBarActiveTintColor: "#FFA500", // Active text color
          tabBarInactiveTintColor: "gray", // Inactive text color
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ focused, size }) => (
            <User color={focused ? "#FFA500" : "gray"} size={size} />
          ),
          tabBarActiveTintColor: "#FFA500", // Active text color
          tabBarInactiveTintColor: "gray", // Inactive text color
        }}
      />
    </Tabs>
  );
}

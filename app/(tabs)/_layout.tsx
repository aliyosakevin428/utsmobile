import { View, Text } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useSession } from "@/contexts/ctx";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  // if (isLoading) {
  //   return <Text>Loading . . .</Text>;
  // }

  // if (!session) {
  //   return <Redirect href="/login" />;
  // }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Beranda",
          title: "Beranda",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="resep"
        options={{
          tabBarLabel: "Resep",
          title: "Resep",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

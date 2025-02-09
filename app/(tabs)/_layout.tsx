import { View, Text } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { useSession } from "@/contexts/ctx";
import { Beef, House, Icon, User } from "lucide-react-native";
import { COLORS } from "@/constants/Colors";

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
          tabBarIcon: ({ size, color }) => <House color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="resep"
        options={{
          tabBarLabel: "Resep",
          title: "Resep",
          tabBarIcon: ({ size, color }) => <Beef color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ size, color }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

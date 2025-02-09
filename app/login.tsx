import React, { useState } from "react";
import { View, Button, Text, TextInput, Image } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "@/contexts/ctx";
import { router } from "expo-router";

const LoginScreen: React.FC = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("example123@email.com");
  const [password, setPassword] = useState("qwerty123");

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await fetch("https://iqmn.my.id/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      return data;
    },
    onSuccess: ({ token }) => {
      signIn(token);
      router.push("/");
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={{ uri: `images/food.png` }}></Image>
      <TextInput
        placeholder="email"
        defaultValue={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry
        placeholder="password"
        defaultValue={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={() => mutate()} />
    </View>
  );
};

export default LoginScreen;

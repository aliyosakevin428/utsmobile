import React, { useState } from "react";
import { View, Button } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "@/contexts/ctx";

const LoginScreen: React.FC = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("alyosa.kevin@gmail.com");
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
  });

  return (
    <View>
      <Button title="Sign In" onPress={() => mutate()} />
    </View>
  );
};

export default LoginScreen;

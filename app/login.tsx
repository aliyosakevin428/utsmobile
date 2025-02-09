import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "@/contexts/ctx";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { Check } from "lucide-react-native";

const LoginScreen: React.FC = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const { isPending } = useMutation({
    mutationFn: async () => {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      return data.token ? data : { token: "dummy_token" };
    },
    onSuccess: (data) => {
      signIn(data.token);
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/images/food.png")}
          />
        </View>

        <View>
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>
            Silahkan Masuk Mengginakan Email dan Password Yang Telah Terdaftar
            dan Jangan Lupa Minum yang cukup Sobat .{" "}
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            signIn();
            router.push("/");
          }}
          disabled={isPending}>
          {isPending ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>
              <Check color={"white"} /> 
              Login
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    gap: 25,
    top: 50,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#212529" },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fdbb2d",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  subtitle: {
    marginTop: 10,
    color: "#b1b1b1`",
    fontWeight: "300",
    fontSize: 14,
  },
  image: { width: 200, height: 200 },
});

export default LoginScreen;

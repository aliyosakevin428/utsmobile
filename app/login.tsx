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
import { Octicons } from "@expo/vector-icons";

const LoginScreen: React.FC = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  // const { mutate, isPending } = useMutation({
  // mutationFn: async () => {
  //   const response = await fetch("https://iqmn.my.id/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   const data = await response.json();
  //   return data.token ? data : { token: "dummy_token" };
  // },
  // onSuccess: (data) => {
  //   signIn(data.token);
  // },

  //   signIn("xxx");
  // });

  const handleLogin = () => {
    signIn("xxx");
    router.push("/");
  };

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
            Silakan login untuk masuk ke akun anda. Pastikan anda menggunakan
            akun yang telah terdaftar.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Octicons name="mail" size={18} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Octicons name="lock" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible} // mengatur hide password atau tidak di hide
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
          />
          {/* EYE ICON BUTTON (TOGGLE VISIBILITY) */}
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.iconContainer}>
            <Octicons
              name={isPasswordVisible ? "eye" : "eye-closed"} //icon toggle
              size={20}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Geologica",
    color: "#212529",
  },
  input: {
    flex: 1,
    fontSize: 16,
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
    color: "#b1b1b1",
    fontWeight: "300",
    fontSize: 14,
  },
  image: { width: 200, height: 200 },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#ccc",
    borderRadius: 10,
    height: 50,
  },
  icon: {
    marginLeft: 10,
    marginRight: 5,
  },
  iconContainer: {
    padding: 10,
  },
});

export default LoginScreen;

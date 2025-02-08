import { Octicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/10.jpg" }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Aliyosa Kevin</Text>
      <Text style={styles.email}>randomemma428@gmail.com</Text>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Keep Your Account Safe and do Update Your Profile Password
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value="username@domain.com"
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>✓ Update Profile</Text>
      </TouchableOpacity>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>Tentang aplikasi</Text>
        <Text style={styles.aboutText}>
          This App is made for Complete the Test for Mobile Programming
          Development
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: "black",
    marginBottom: 15,
    padding: 0,
    margin: 10,
  },
  descriptionText: {
    alignContent: "center",
    textAlign: "center",
    padding: 0,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 13,
    color: "gray",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: "#fdbb2d",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
  },
  updateText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  aboutSection: {
    marginTop: 20,
    width: "100%",
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  aboutText: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 21,
    paddingBlock: 15,
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;

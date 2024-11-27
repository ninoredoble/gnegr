import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, TextInput, Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const Recover = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Local theme state

  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Toggle theme function
  const currentTheme = isDarkMode ? styles.darkTheme : styles.lightTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.background }]}>
      {/* Theme Toggle */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Icon
          name={isDarkMode ? "sun-o" : "moon-o"}
          size={30}
          color={currentTheme.text}
        />
      </TouchableOpacity>

      {/* Logo Section */}
      <View style={[styles.section, styles.logoBox]}>
        <Avatar.Image
          style={{ backgroundColor: "transparent" }}
          size={200}
          source={require("../assets/logo.png")}
        />
      </View>

      {/* Input Section */}
      <View style={[styles.section, { marginTop: -50 }]}>
        <TextInput
          textContentType="emailAddress"
          label="Email"
          mode="outlined"
          placeholder="Enter your email"
          placeholderTextColor={currentTheme.placeholderText}
          style={[styles.input, { backgroundColor: currentTheme.card }]}
          outlineColor={currentTheme.inputOutline}
          activeOutlineColor="#0056B3"
          value={email}
          onChangeText={setEmail}
          left={<TextInput.Icon icon="email" size={23} color={currentTheme.text} />}
        />
      </View>

      {/* Action Buttons */}
      <View style={[styles.section, { marginTop: -100 }]}>
        <Button
          onPress={() => console.log("Recover Password Action")}
          mode="contained"
          style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]}
          labelStyle={styles.buttonText}
        >
          Recover Password
        </Button>

        <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
          <Text style={[styles.centeredText, { color: currentTheme.text }]}>
            Remembered your password?
          </Text>
        </View>

        <Button
          onPress={() => router.back()}
          mode="contained"
          style={[styles.button, { backgroundColor: "#A0A0A0" }]}
          labelStyle={styles.buttonText}
        >
          Login Here
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Recover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    flex: 1,
    width: "100%",
  },
  logoBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginBottom: 10,
    marginHorizontal: 12,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
  centeredText: {
    textAlign: "center",
  },
  themeToggle: {
    alignSelf: "flex-end",
    margin: 10,
  },
  lightTheme: {
    background: "#F9F9F9",
    text: "#000",
    buttonBackground: "#0056B3",
    inputOutline: "#A0A0A0",
    card: "#FFFFFF",
    placeholderText: "#A0A0A0",
  },
  darkTheme: {
    background: "#1C1C1E",
    text: "#FFF",
    buttonBackground: "#0056B3",
    inputOutline: "#A0A0A0",
    card: "#2C2C2E",
    placeholderText: "#A0A0A0",
  },
});

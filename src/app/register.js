import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import styles from "../styles/styles";

const Register = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const router = useRouter(); // Retain Expo Router navigation logic

  return (
    <SafeAreaView style={[styles.container, { marginTop: -75 }, { backgroundColor: styles.lightTheme.background }]}>
      {/* Logo Section */}
      <View style={[styles.section, styles.logoBox]}>
        <Avatar.Image
          style={{ backgroundColor: "transparent" }}
          size={100}
          source={require("../assets/logo.png")}
        />
      </View>

      {/* Input Section */}
      <View style={[styles.section, { marginTop: 5 }]}>
        <TextInput
          label="Name"
          mode="outlined"
          placeholder="Enter your name"
          style={[styles.input, { backgroundColor: styles.lightTheme.card }]}
          outlineColor={styles.lightTheme.inputOutline}
          activeOutlineColor="#0056B3"
          left={<TextInput.Icon icon="account" size={23} color={styles.lightTheme.text} />}
        />

        <TextInput
          textContentType="emailAddress"
          label="Email"
          mode="outlined"
          placeholder="Enter your email"
          style={[styles.input, { backgroundColor: styles.lightTheme.card }]}
          outlineColor={styles.lightTheme.inputOutline}
          activeOutlineColor="#0056B3"
          left={<TextInput.Icon icon="email" size={23} color={styles.lightTheme.text} />}
        />

        <TextInput
          label="Phone Number"
          mode="outlined"
          placeholder="Enter your phone number"
          style={[styles.input, { backgroundColor: styles.lightTheme.card }]}
          outlineColor={styles.lightTheme.inputOutline}
          activeOutlineColor="#0056B3"
          left={<TextInput.Icon icon="phone" size={23} color={styles.lightTheme.text} />}
        />

        <TextInput
          label="Birthday (MM-DD-YYYY)"
          mode="outlined"
          placeholder="Enter your birthday"
          style={[styles.input, { backgroundColor: styles.lightTheme.card }]}
          outlineColor={styles.lightTheme.inputOutline}
          activeOutlineColor="#0056B3"
          left={<TextInput.Icon icon="calendar" size={23} color={styles.lightTheme.text} />}
        />

        <TextInput
          label="Password"
          mode="outlined"
          placeholder="Enter your password"
          style={[styles.input, { backgroundColor: styles.lightTheme.card }]}
          outlineColor={styles.lightTheme.inputOutline}
          activeOutlineColor="#0056B3"
          left={<TextInput.Icon icon="key" size={23} color={styles.lightTheme.text} />}
          right={
            <TextInput.Icon
              onPress={() => setTogglePassword(!togglePassword)}
              icon={togglePassword ? "eye" : "eye-off"}
              size={23}
              color={styles.lightTheme.text}
            />
          }
          secureTextEntry={!togglePassword}
        />

        <TextInput
          label="Confirm Password"
          mode="outlined"
          placeholder="Confirm your password"
          style={[styles.input, { backgroundColor: styles.lightTheme.card }]}
          outlineColor={styles.lightTheme.inputOutline}
          activeOutlineColor="#0056B3"
          left={<TextInput.Icon icon="key" size={23} color={styles.lightTheme.text} />}
          right={
            <TextInput.Icon
              onPress={() => setToggleConfirmPassword(!toggleConfirmPassword)}
              icon={toggleConfirmPassword ? "eye" : "eye-off"}
              size={23}
              color={styles.lightTheme.text}
            />
          }
          secureTextEntry={!toggleConfirmPassword}
        />
      </View>

      {/* Action Buttons */}
      <View style={[styles.section, { marginTop: 15 }]}>
        <Button
          onPress={() => console.log("Signup Action")}
          mode="contained"
          style={[styles.button, { backgroundColor: styles.lightTheme.buttonBackground }]}
          labelStyle={styles.buttonText}
        >
          Signup
        </Button>

        <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
          <Text style={[styles.centeredText, { color: styles.lightTheme.text }]}>Already have an account?</Text>
        </View>

        <Button
          onPress={() => router.back()} // Use Expo Router to go back to the login screen
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

export default Register;

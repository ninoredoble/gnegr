import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, TextInput, Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

// Constants to define theme modes
const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

// Color constants used throughout the component for consistency
const COLORS = {
  PRIMARY: "#0056B3",
  SECONDARY: "#A0A0A0",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  GRAY: "#A0A0A0",
  DARK_BACKGROUND: "#1C1C1E",
  DARK_CARD: "#2C2C2E",
};

const Recover = () => {
  const router = useRouter(); // Router for navigation actions

  // State for storing the user's email input
  const [email, setEmail] = useState("");
  // Local state to determine if the dark theme is active
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State for handling the loading indicator when recovering password
  const [isRecovering, setIsRecovering] = useState(false);

  // Function to toggle between dark and light themes
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  // Determine current theme based on state
  const currentTheme = isDarkMode ? THEME.DARK : THEME.LIGHT;

  // Function to validate the email format using a regular expression
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handler function for recovering the password
  const handleRecoverPassword = () => {
    // If the email format is not valid, show an alert and exit the function
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    // Begin the recover password process and show the loading spinner
    setIsRecovering(true);

    // Simulate an API call delay using setTimeout
    setTimeout(() => {
      setIsRecovering(false);
      // Notify the user that the recovery link has been sent
      Alert.alert("Success", "A password reset link has been sent to your email.");
      // Navigate back to the previous screen (likely the login page)
      router.back();
    }, 2000); // 2-second delay to simulate an API request
  };

  // Dynamic theme-based styling using StyleSheet.create
  const themeStyles = StyleSheet.create({
    container: {
      backgroundColor: currentTheme === THEME.DARK ? COLORS.DARK_BACKGROUND : COLORS.WHITE,
    },
    text: {
      color: currentTheme === THEME.DARK ? COLORS.WHITE : COLORS.BLACK,
    },
    card: {
      backgroundColor: currentTheme === THEME.DARK ? COLORS.DARK_CARD : COLORS.WHITE,
    },
    placeholderText: {
      // Using the same color for placeholder text in both themes
      color: currentTheme === THEME.DARK ? COLORS.GRAY : COLORS.GRAY,
    },
    buttonBackground: {
      backgroundColor: COLORS.PRIMARY,
    },
  });

  return (
    // SafeAreaView ensures the content is rendered within the safe boundaries of a device.
    <SafeAreaView style={[styles.container, themeStyles.container]}>
      
      {/* Toggle Button for Changing Theme */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Icon
          name={isDarkMode ? "sun-o" : "moon-o"} // Sun icon for dark mode, moon for light mode
          size={30}
          color={themeStyles.text.color} // Icon color changes based on theme
        />
      </TouchableOpacity>

      {/* Logo Section */}
      <View style={[styles.section, styles.logoBox]}>
        <Avatar.Image
          style={{ backgroundColor: "transparent" }}
          size={200}
          // Displaying the logo from the assets folder
          source={require("../assets/logo.png")}
        />
      </View>

      {/* Input Section for Email */}
      <View style={[styles.section, { marginTop: -50 }]}>
        <TextInput
          textContentType="emailAddress" // Helps autofill and validation on some devices
          label="Email"
          mode="outlined"
          placeholder="Enter your email"
          // Placeholder text color defined by the current theme
          placeholderTextColor={themeStyles.placeholderText.color}
          // Combine custom input styles with theme-specific card style
          style={[styles.input, themeStyles.card]}
          outlineColor={COLORS.GRAY} // Outline color when input is not focused
          activeOutlineColor={COLORS.PRIMARY} // Outline color when input is focused
          value={email} // Value from state
          onChangeText={setEmail} // Update state as user types
          // Icon at the left side of the text input
          left={<TextInput.Icon icon="email" size={23} color={themeStyles.text.color} />}
        />
      </View>

      {/* Action Buttons Section */}
      <View style={[styles.section, { marginTop: -100 }]}>
        {/* Button to trigger the password recovery process */}
        <Button
          onPress={handleRecoverPassword}
          mode="contained"
          style={[styles.button, themeStyles.buttonBackground]}
          labelStyle={styles.buttonText}
          disabled={isRecovering} // Disable the button during the recovery process
        >
          {isRecovering ? (
            // Show a spinner if the recovery process is in progress
            <ActivityIndicator color={COLORS.WHITE} />
          ) : (
            "Recover Password"
          )}
        </Button>

        {/* Informational text prompting the user if they remembered their password */}
        <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
          <Text style={[styles.centeredText, themeStyles.text]}>
            Remembered your password?
          </Text>
        </View>

        {/* Button to navigate back to the login page */}
        <Button
          onPress={() => router.back()}
          mode="contained"
          style={[styles.button, { backgroundColor: COLORS.SECONDARY }]}
          labelStyle={styles.buttonText}
        >
          Login Here
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Recover;

// Global styles for layout and spacing
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full height of the screen
    padding: 20, // General padding around the content
  },
  section: {
    flex: 1, // Allows each section to take available space
    width: "100%", // Full width of the container
  },
  logoBox: {
    justifyContent: "center", // Center the logo vertically
    alignItems: "center", // Center the logo horizontally
    marginBottom: 10, // Space below the logo
  },
  input: {
    marginBottom: 15, // Space between input fields and other elements
  },
  button: {
    marginBottom: 10, // Space below each button
    marginHorizontal: 12, // Horizontal margin to align with other components
    paddingVertical: 10, // Vertical padding for the button content
  },
  buttonText: {
    fontSize: 15, // Font size for button text
    color: "white", // Button text color
  },
  centeredText: {
    textAlign: "center", // Center the text horizontally
  },
  themeToggle: {
    alignSelf: "flex-end", // Align theme toggle button to the right
    margin: 10, // Margin around the toggle button
  },
});

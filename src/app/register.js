import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, TextInput, Text, Button, Icon } from "react-native-paper";
import { useRouter } from "expo-router";

// Main Register component: handles user registration UI and logic
const Register = () => {
  const router = useRouter(); // Router hook for navigation between screens

  // States for all form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for toggling password visibility for both password fields
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  // State to control dark/light theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State for loading indicator during registration API call simulation
  const [isLoading, setIsLoading] = useState(false);

  // State to store and display any validation errors for each input field
  const [errors, setErrors] = useState({});

  // Function to toggle between light and dark themes
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  // Set the current theme based on isDarkMode state
  const currentTheme = isDarkMode ? styles.darkTheme : styles.lightTheme;

  // Function to validate email format using a regular expression
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to ensure that both password fields have matching values
  const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  // Function to validate all input fields and set error messages accordingly
  const validateInputs = () => {
    const newErrors = {};

    // Check if name is provided
    if (!name) newErrors.name = "Name is required";

    // Check if email is provided and valid
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format";

    // Check if phone number is provided
    if (!phone) newErrors.phone = "Phone number is required";

    // Check if birthday is provided
    if (!birthday) newErrors.birthday = "Birthday is required";

    // Validate password length and existence
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    // Validate confirmation of password
    if (!confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    else if (!validatePasswordMatch(password, confirmPassword))
      newErrors.confirmPassword = "Passwords do not match";

    // Update errors state to show error messages on the UI
    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle the registration process when user taps "Register"
  const handleRegister = () => {
    // If any validation fails, exit early without proceeding
    if (!validateInputs()) return;

    setIsLoading(true); // Start loading spinner on button

    // Simulate an API call for registration using setTimeout
    setTimeout(() => {
      setIsLoading(false); // Stop loading once simulation is complete
      Alert.alert("Success", "Registration successful!"); // Notify user of success
      router.back(); // Navigate back to the previous screen (likely the login page)
    }, 2000); // Simulated 2-second delay to mimic network latency
  };

  return (
    // SafeAreaView ensures that content is rendered within the device's safe boundaries
    // The background color is set dynamically based on the current theme
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.background }]}>
      
      {/* Theme Toggle Button: Allows users to switch between light and dark themes */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Icon
          name={isDarkMode ? "sun-o" : "moon-o"} // Display sun icon for dark mode, moon icon for light mode
          size={30}
          color={currentTheme.text} // Icon color adapts to the current theme
        />
      </TouchableOpacity>

      {/* ScrollView allows the content to be scrollable if it exceeds the screen height */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Logo Section: Displays the application logo at the top */}
        <View style={[styles.section, styles.logoBox]}>
          <Avatar.Image
            style={{ backgroundColor: "transparent" }}
            size={150}
            source={require("../assets/logo.png")}
          />
        </View>

        {/* Input Fields Section: Contains all registration input fields */}
        <View style={styles.section}>
          {/* Name Input */}
          <TextInput
            label="Name"
            mode="outlined"
            placeholder="Enter your name"
            placeholderTextColor={currentTheme.placeholderText}
            style={[styles.input, { backgroundColor: currentTheme.card }]}
            outlineColor={currentTheme.inputOutline}
            activeOutlineColor="#0056B3"
            value={name}
            onChangeText={setName}
            left={<TextInput.Icon icon="account" size={23} color={currentTheme.text} />}
            error={!!errors.name} // Indicates error if validation fails
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          {/* Email Input */}
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
            error={!!errors.email}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          {/* Phone Number Input */}
          <TextInput
            label="Phone Number"
            mode="outlined"
            placeholder="Enter your phone number"
            placeholderTextColor={currentTheme.placeholderText}
            style={[styles.input, { backgroundColor: currentTheme.card }]}
            outlineColor={currentTheme.inputOutline}
            activeOutlineColor="#0056B3"
            value={phone}
            onChangeText={setPhone}
            left={<TextInput.Icon icon="phone" size={23} color={currentTheme.text} />}
            error={!!errors.phone}
          />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

          {/* Birthday Input */}
          <TextInput
            label="Birthday (MM-DD-YYYY)"
            mode="outlined"
            placeholder="Enter your birthday"
            placeholderTextColor={currentTheme.placeholderText}
            style={[styles.input, { backgroundColor: currentTheme.card }]}
            outlineColor={currentTheme.inputOutline}
            activeOutlineColor="#0056B3"
            value={birthday}
            onChangeText={setBirthday}
            left={<TextInput.Icon icon="calendar" size={23} color={currentTheme.text} />}
            error={!!errors.birthday}
          />
          {errors.birthday && <Text style={styles.errorText}>{errors.birthday}</Text>}

          {/* Password Input */}
          <TextInput
            label="Password"
            mode="outlined"
            placeholder="Enter your password"
            placeholderTextColor={currentTheme.placeholderText}
            style={[styles.input, { backgroundColor: currentTheme.card }]}
            outlineColor={currentTheme.inputOutline}
            activeOutlineColor="#0056B3"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isShowPassword} // Hide or show password text based on state
            left={<TextInput.Icon icon="key" size={23} color={currentTheme.text} />}
            right={
              <TextInput.Icon
                onPress={() => setIsShowPassword(!isShowPassword)}
                icon={isShowPassword ? "eye" : "eye-off"}
                size={23}
                color={currentTheme.text}
              />
            }
            error={!!errors.password}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          {/* Confirm Password Input */}
          <TextInput
            label="Confirm Password"
            mode="outlined"
            placeholder="Confirm your password"
            placeholderTextColor={currentTheme.placeholderText}
            style={[styles.input, { backgroundColor: currentTheme.card }]}
            outlineColor={currentTheme.inputOutline}
            activeOutlineColor="#0056B3"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!isShowConfirmPassword}
            left={<TextInput.Icon icon="key" size={23} color={currentTheme.text} />}
            right={
              <TextInput.Icon
                onPress={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                icon={isShowConfirmPassword ? "eye" : "eye-off"}
                size={23}
                color={currentTheme.text}
              />
            }
            error={!!errors.confirmPassword}
          />
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
        </View>

        {/* Actions Section: Contains the register button and a link to the login page */}
        <View style={styles.section}>
          <Button
            onPress={handleRegister}
            mode="contained"
            style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]}
            labelStyle={styles.buttonText}
            loading={isLoading} // Display loading spinner if registration is processing
            disabled={isLoading} // Disable the button while loading
          >
            Register
          </Button>

          {/* Additional text and button to navigate back to the login screen */}
          <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
            <Text style={[styles.centeredText, { color: currentTheme.text }]}>
              Already have an account?
            </Text>
          </View>

          <Button
            onPress={() => router.back()} // Navigate back to the login page
            mode="contained"
            style={[styles.button, { backgroundColor: "#A0A0A0" }]}
            labelStyle={styles.buttonText}
          >
            Login Here
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

// Global styles and theme definitions for the Register screen
const styles = StyleSheet.create({
  // Container styling for overall layout
  container: {
    flex: 1,
    padding: 20,
  },
  // Styling for the ScrollView content container
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  // Section styling to add separation between different areas
  section: {
    width: "100%",
    marginBottom: 20, // Margin between sections
  },
  // Logo container styling for proper alignment and spacing
  logoBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Space below the logo
  },
  // Input field styling
  input: {
    marginBottom: 15, // Space between individual inputs
  },
  // Button styling for consistency across buttons
  button: {
    marginBottom: 10,
    marginHorizontal: 12,
    paddingVertical: 10,
  },
  // Button text styling
  buttonText: {
    fontSize: 15,
    color: "white",
  },
  // Centered text styling
  centeredText: {
    textAlign: "center",
  },
  // Theme toggle button positioning
  themeToggle: {
    alignSelf: "flex-end",
    margin: 10,
  },
  // Light theme style definitions
  lightTheme: {
    background: "#F9F9F9",       // Background color for light mode
    text: "#000",               // Primary text color
    buttonBackground: "#0056B3", // Button background color
    inputOutline: "#A0A0A0",     // Outline color for inputs
    card: "#FFFFFF",            // Card background for input fields
    inputText: "#000",          // Text color inside input fields
    placeholderText: "#A0A0A0",  // Color for placeholder text
  },
  // Dark theme style definitions
  darkTheme: {
    background: "#1C1C1E",       // Dark background color
    text: "#FFF",               // White text for dark mode
    buttonBackground: "#0056B3", // Button background remains consistent
    inputOutline: "#A0A0A0",     // Input outline for dark mode
    card: "#2C2C2E",            // Darker card background for inputs
    inputText: "#A9A9A9",        // Text color for inputs in dark mode
    placeholderText: "#A0A0A0",  // Placeholder text color
  },
  // Error message text styling
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

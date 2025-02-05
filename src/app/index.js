import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, TextInput, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// Define constants for theme modes
const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

// Define color constants for consistency throughout the app
const COLORS = {
  PRIMARY: '#0056B3',
  SECONDARY: '#A0A0A0',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: '#A0A0A0',
  DARK_BACKGROUND: '#1C1C1E',
  DARK_CARD: '#2C2C2E',
};

const ANIMATION_DURATION = 1000; // Duration for splash screen fade animation in milliseconds

const Login = () => {
  const router = useRouter();

  // State hooks for user input and UI state management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false); // Toggle for showing/hiding password
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle for theme mode
  const [loading, setLoading] = useState(true); // Controls the splash screen visibility
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Indicates if login is in progress
  const [fadeAnim] = useState(new Animated.Value(1)); // Animation value for splash screen fade-out

  // Function to validate email format using a regular expression
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to validate that the password meets the minimum length requirement
  const validatePassword = (password) => {
    return password.length >= 6; // Minimum 6 characters required
  };

  // Handler for the login button press
  const handleLogin = () => {
    // Validate email and show alert if invalid
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Validate password and show alert if invalid
    if (!validatePassword(password)) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters long.');
      return;
    }

    // Simulate an API login call with a delay
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      router.replace('dashboard'); // Navigate to the dashboard upon successful login
    }, 2000); // 2-second simulated API call delay
  };

  // Effect hook to handle the splash screen animation and auto-hide logic
  useEffect(() => {
    // Prevent the splash screen from auto-hiding until we manually hide it
    SplashScreen.preventAutoHideAsync();

    // Start fade-out animation after a delay equal to ANIMATION_DURATION
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }).start();

      // After the fade animation completes, update the loading state to hide the splash screen
      setTimeout(() => {
        setLoading(false);
      }, ANIMATION_DURATION);
    }, ANIMATION_DURATION);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [fadeAnim]);

  // Toggle between light and dark theme modes
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const currentTheme = isDarkMode ? THEME.DARK : THEME.LIGHT;

  // Define dynamic styles based on the current theme
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
      color: currentTheme === THEME.DARK ? COLORS.GRAY : COLORS.GRAY,
    },
    buttonBackground: {
      backgroundColor: COLORS.PRIMARY,
    },
  });

  // Render the splash screen while loading is true
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.Image
          source={require('../assets/logo.png')}
          style={[styles.logo, { opacity: fadeAnim }]}
        />
      </SafeAreaView>
    );
  }

  // Main login screen render
  return (
    <SafeAreaView style={[styles.container, themeStyles.container]}>
      {/* Theme Toggle Button */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Icon
          name={isDarkMode ? 'sun-o' : 'moon-o'}
          size={30}
          color={themeStyles.text.color}
        />
      </TouchableOpacity>

      {/* Logo Section */}
      <View style={[styles.section, styles.logoBox]}>
        <Avatar.Image
          style={{ backgroundColor: 'transparent' }}
          size={250}
          source={require('../assets/logo.png')}
        />
      </View>

      {/* Input Fields Section */}
      <View style={[styles.section, { marginTop: -50 }]}>
        {/* Email Input Field */}
        <TextInput
          label="Email"
          mode="outlined"
          placeholder="Enter your email"
          placeholderTextColor={themeStyles.placeholderText.color}
          style={[styles.input, themeStyles.card]}
          outlineColor={COLORS.GRAY}
          activeOutlineColor={COLORS.PRIMARY}
          value={email}
          onChangeText={setEmail}
          left={<TextInput.Icon icon="email" size={23} color={themeStyles.text.color} />}
        />

        {/* Password Input Field */}
        <TextInput
          label="Password"
          mode="outlined"
          placeholder="Enter your password"
          placeholderTextColor={themeStyles.placeholderText.color}
          style={[styles.input, themeStyles.card]}
          outlineColor={COLORS.GRAY}
          activeOutlineColor={COLORS.PRIMARY}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isShowPassword} // Mask or unmask the password based on isShowPassword state
          left={<TextInput.Icon icon="key" size={23} color={themeStyles.text.color} />}
          right={
            <TextInput.Icon
              onPress={() => setIsShowPassword(!isShowPassword)}
              icon={isShowPassword ? 'eye' : 'eye-off'}
              size={23}
              color={themeStyles.text.color}
            />
          }
        />
      </View>

      {/* Actions Section */}
      <View style={[styles.section, { marginTop: -150 }]}>
        {/* Login Button */}
        <Button
          onPress={handleLogin}
          mode="contained"
          style={[styles.button, themeStyles.buttonBackground]}
          labelStyle={styles.buttonText}
          disabled={isLoggingIn} // Disable button while login process is ongoing
        >
          {isLoggingIn ? (
            <ActivityIndicator color={COLORS.WHITE} /> // Show spinner during login process
          ) : (
            'Login'
          )}
        </Button>

        {/* Informational Text for Registration */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
          <Text style={[styles.centeredText, themeStyles.text]}>
            Don't have an account yet?
          </Text>
        </View>

        {/* Registration Button */}
        <Button
          onPress={() => router.push('register')}
          mode="contained"
          style={[styles.button, { backgroundColor: COLORS.SECONDARY }]}
          labelStyle={styles.buttonText}
        >
          Register Here
        </Button>

        {/* Forgot Password Button */}
        <Button
          onPress={() => router.push('recover')}
          mode="outlined"
          style={styles.forgotButton}
          labelStyle={{ color: COLORS.PRIMARY }}
        >
          Forgot Password?
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

// Basic styling for components used in the login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    flex: 1,
    width: '100%',
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'white',
  },
  forgotButton: {
    borderColor: '#0056B3',
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  centeredText: {
    textAlign: 'center',
  },
  themeToggle: {
    alignSelf: 'flex-end',
    margin: 10,
  },
});

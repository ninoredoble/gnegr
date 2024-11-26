import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, TextInput, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Local theme state

  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Toggle theme function
  const currentTheme = isDarkMode ? styles.darkTheme : styles.lightTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.background }]}>
      {/* Theme Toggle */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Icon
          name={isDarkMode ? 'sun-o' : 'moon-o'}
          size={30}
          color={currentTheme.text}
        />
      </TouchableOpacity>

      {/* Logo Section */}
      <View style={[styles.section, styles.logoBox]}>
        <Avatar.Image
          style={{ backgroundColor: 'transparent' }}
          size={200}
          source={require('../assets/logo.png')}
        />
      </View>

      {/* Input Fields */}
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
          secureTextEntry={!isShowPassword}
          left={<TextInput.Icon icon="key" size={23} color={currentTheme.text} />}
          right={
            <TextInput.Icon
              onPress={() => setIsShowPassword(!isShowPassword)}
              icon={isShowPassword ? 'eye' : 'eye-off'}
              size={23}
              color={currentTheme.text}
            />
          }
        />
      </View>

      {/* Actions Section */}
      <View style={[styles.section, { marginTop: -130 }]}>
        <Button
          onPress={() => router.replace('dashboard')}
          mode="contained"
          style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]}
          labelStyle={styles.buttonText}
        >
          Login
        </Button>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
          <Text style={[styles.centeredText, { color: currentTheme.text }]}>
            Don't have an account yet?
          </Text>
        </View>

        <Button
          onPress={() => router.push('register')}
          mode="contained"
          style={[styles.button, { backgroundColor: '#A0A0A0' }]}
          labelStyle={styles.buttonText}
        >
          Register Here
        </Button>

        <Button
          onPress={() => router.push('recover')}
          mode="outlined"
          style={styles.forgotButton}
          labelStyle={{ color: '#0056B3' }}
        >
          Forgot Password?
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    marginVertical: 10,
  },
  forgotButton: {
    borderColor: '#0056B3',
    borderWidth: 1,
  },
  centeredText: {
    textAlign: 'center',
  },
  themeToggle: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  lightTheme: {
    background: '#FFFFFF',
    text: '#000000',
    card: '#F8F9FA',
    inputOutline: '#CED4DA',
    buttonBackground: '#007BFF',
    placeholderText: '#6C757D',
  },
  darkTheme: {
    background: '#343A40',
    text: '#FFFFFF',
    card: '#495057',
    inputOutline: '#ADB5BD',
    buttonBackground: '#6C757D',
    placeholderText: '#CED4DA',
  },
});

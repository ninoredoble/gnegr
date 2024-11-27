import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, TextInput, Text, Button, Icon } from "react-native-paper";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const currentTheme = isDarkMode ? styles.darkTheme : styles.lightTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.background }]}>
      {/* Theme Toggle */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Icon name={isDarkMode ? "sun-o" : "moon-o"} size={30} color={currentTheme.text} />
      </TouchableOpacity>

      {/* Logo Section */}
      <View style={[styles.section, styles.logoBox]}>
        <Avatar.Image
          style={{ backgroundColor: "transparent" }}
          size={200}
          source={require("../assets/logo.png")}
        />
      </View>

      {/* Input Fields */}
      <View style={[styles.section, { marginTop: -35 }]}>
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
        />

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
        />

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
              icon={isShowPassword ? "eye" : "eye-off"}
              size={23}
              color={currentTheme.text}
            />
          }
        />

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
        />
      </View>

      {/* Actions Section */}
      <View style={[styles.section, { marginTop: 240 }]}>
        <Button
          onPress={() => console.log("Register Action")}
          mode="contained"
          style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]}
          labelStyle={styles.buttonText}
        >
          Register
        </Button>

        <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
          <Text style={[styles.centeredText, { color: currentTheme.text }]}>
            Already have an account?
          </Text>
        </View>

        <Button
          onPress={() => router.push("login")}
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
    marginBottom: 5,
    marginTop: -115,
  },
  input: {
    marginBottom: 15 ,
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
        color: '#0056B3',
    },
  centeredText: {
    textAlign: 'center',
  },
  themeToggle: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  lightTheme: {
    background: '#F9F9F9',
    text: '#000',
    buttonBackground: '#0056B3',
    inputOutline: '#A0A0A0',
    card: '#FFFFFF',
    inputText: '#000',
},
darkTheme: {
    background: '#1C1C1E',
    text: '#FFF',
    buttonBackground: '#0056B3',
    inputOutline: '#A0A0A0',
    card: '#2C2C2E',
    inputText: '#A9A9A9',
    placeholderText: '#A0A0A0',
},
});

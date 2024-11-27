  import React from 'react';
  import { View, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native';
  import Avatar from '../../../components/Avatar/index';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { useRouter } from 'expo-router'; // Import the router from expo-router
  
  // Import the banner image
  const banner = require('../../../assets/bg.gif');

  // Define themes for light and dark modes
  const lightTheme = {
    background: '#F9F9F9',
    text: '#000',
    card: '#FFF',
    buttonBackground: '#EAEAEA',
    buttonText: '#000',
  };

  const darkTheme = {
    background: '#1C1C1E',
    text: '#FFF',
    card: '#2C2C2E',
    buttonBackground: '#3A3A3C',
    buttonText: '#FFF',
  };

  // Profile component definition
  const Profile = ({ isDarkMode, toggleTheme }) => {
    const router = useRouter(); // Use the router for navigation

    // State variables for notifications and user status
    const [notifications, setNotifications] = React.useState(true);
    const [status, setStatus] = React.useState('online'); // Track user status

    // Animated values for scaling effects on various UI elements
    const notificationScale = React.useRef(new Animated.Value(1)).current;
    const darkModeScale = React.useRef(new Animated.Value(1)).current;
    const signOutScale = React.useRef(new Animated.Value(1)).current;
    const statusScale = React.useRef(new Animated.Value(1)).current; // Scale for status icon

    // Determine current theme based on isDarkMode prop
    const currentTheme = isDarkMode ? darkTheme : lightTheme;

    // Function to toggle notifications with animation
    const toggleNotifications = () => {
      Animated.timing(notificationScale, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setNotifications(!notifications); // Toggle notification state
        Animated.spring(notificationScale, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }).start();
      });
    };

    // Function to handle sign out with animation
    const handleSignOut = () => {
      Animated.timing(signOutScale, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        router.replace('/login'); // Use the router to navigate to login page on sign out
        Animated.spring(signOutScale, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }).start();
      });
    };

    // Function to toggle user status (online, busy, offline)
    const toggleStatus = () => {
      Animated.timing(statusScale, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setStatus((prevStatus) => {
          if (prevStatus === 'online') return 'busy';
          if (prevStatus === 'busy') return 'offline';
          return 'online';
        });
        Animated.spring(statusScale, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }).start();
      });
    };

    // Function to get the color for the status icon based on current status
    const getStatusColor = () => {
      if (status === 'online') return 'green';
      if (status === 'busy') return '#F4C430'; // Yellow for busy
      return 'grey'; // Grey for offline
    };

    // Function to get the text representation of the current status
    const getStatusText = () => {
      if (status === 'online') return 'Active';
      if (status === 'busy') return 'Busy';
      return 'Offline';
    };

    return (
      <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
        {/* Banner at the top */}
        <ImageBackground source={banner} style={styles.banner} />

        {/* User Avatar */}
        <View style={styles.avatarContainer}>
          <Avatar size={100} />
        </View>

        {/* User Name Display */}
        <View style={styles.nameContainer}>
          <Text style={[styles.firstName, { color: currentTheme.text }]}>G. Niño Emmanuel G.</Text>
          <Text style={[styles.surname, { color: currentTheme.text }]}>Redoble</Text>
        </View>

        {/* Status and Joined Information */}
        <View style={styles.statusInfoContainer}>
          <Text style={[styles.joinDate, { color: currentTheme.text }]}>Joined 3 years ago</Text>
          
          {/* Status Icon beside joined info */}
          <TouchableOpacity onPress={toggleStatus}>
            <Animated.View style={[styles.statusIcon, { transform: [{ scale: statusScale }] }]}>
              <Icon name="circle" size={24} color={getStatusColor()} />
            </Animated.View>
          </TouchableOpacity>

          {/* Display status text next to the icon */}
          <Text style={[styles.statusText, { color: getStatusColor() }]}>{getStatusText()}</Text>
        </View>

        {/* Section Headers for Profile and Settings */}
        <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Profile</Text>
        <View style={styles.divider} />

        {/* Manage Users Card */}
        <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
          <Text style={[styles.label, { color: currentTheme.text }]}>Manage Users</Text>
          <TouchableOpacity>
            <Icon name="users" size={26} color={currentTheme.text} />
          </TouchableOpacity>
        </View>

        {/* Section Header for Settings */}
        <Text style={[styles.sectionHeader, { color: currentTheme.text }]}>Settings</Text>
        <View style={styles.divider} />

        {/* Notifications Card */}
        <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
          <Text style={[styles.label, { color: currentTheme.text }]}>Notifications</Text>
          <TouchableOpacity onPress={toggleNotifications}>
            <Animated.View style={{ transform: [{ scale: notificationScale }] }}>
              <Icon name={notifications ? "bell" : "bell-slash"} size={26} color={currentTheme.text} />
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Dark Mode Toggle Card */}
        <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
          <Text style={[styles.label, { color: currentTheme.text }]}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Text>
          <TouchableOpacity onPress={toggleTheme}>
            <Animated.View style={{ transform: [{ scale: darkModeScale }] }}>
              <Icon name={isDarkMode ? "sun-o" : "moon-o"} size={26} color={currentTheme.text} />
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: currentTheme.buttonBackground }]} onPress={handleSignOut}>
          <Animated.View style={{ transform: [{ scale: signOutScale }] }}>
            <Icon name="sign-out" size={20} color={currentTheme.buttonText} />
          </Animated.View>
          <Text style={[styles.buttonText, { color: currentTheme.buttonText }]}
          oonPress={() => router.back()} 
          >Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Define styles for the component
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    banner: {
      width: '150%',
      height: 180,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -40,
    },
    avatarContainer: {
      position: 'absolute',
      top: 35,
      zIndex: 1,
      alignSelf: 'center',
    },
    nameContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    statusInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      justifyContent: 'center',
    },
    statusIcon: {
      marginLeft: 10, // Adds space between joined text and icon
    },
    statusText: {
      marginLeft: 10,
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
    },
    sectionHeader: {
      marginTop: 30,
      fontSize: 22,
      fontFamily: 'Poppins-Bold',
      marginVertical: 10,
      marginLeft: 50,
      marginBottom: -5,
      textAlign: 'left',
      width: '100%',
    },
    divider: {
      width: '90%',
      height: 1,
      backgroundColor: '#E0E0E0',
      marginVertical: 5,
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      padding: 15,
      marginVertical: 10,
      borderRadius: 12,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
    },
    label: {
      fontSize: 18,
      fontFamily: 'Poppins-Medium',
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      padding: 15,
      borderRadius: 12,
      marginTop: 20,
    },
    buttonText: {
      marginLeft: 10,
      fontSize: 18,
      fontFamily: 'Poppins-Medium',
    },
    joinDate: {
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      color: '#888', // A lighter shade for the joined date
    },
    firstName: {
      fontSize: 24,
      fontFamily: 'Poppins-Bold',
    },
    surname: {
      fontSize: 24,
      fontFamily: 'Poppins-Bold',
      marginTop: -5,
    },
  });

  export default Profile;

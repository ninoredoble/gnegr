import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const colors = isDarkMode
    ? {
        background: '#333',
        text: '#FFF',
        secondary: '#1E90FF', // Used for active and important elements
        buttonBackground: '#444',
        borderColor: '#666',
      }
    : {
        background: '#FFF',
        text: '#000',
        secondary: '#1E90FF', // Used for active and important elements
        buttonBackground: '#F5F5F5',
        borderColor: '#B0B0B0',
      };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Section: Tools and Resources */}
      <View style={styles.section}>
        <Text style={[styles.sectionLabel, { color: colors.text }]}>Tools and Resources</Text>
        <TouchableOpacity style={[styles.settingOption, { borderColor: colors.borderColor }]}>
          <Icon name="cogs" size={18} color={colors.secondary} style={styles.icon} />
          <Text style={[styles.settingText, { color: colors.text }]}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingOption, { borderColor: colors.borderColor }]}>
          <Icon name="key" size={18} color={colors.secondary} style={styles.icon} />
          <Text style={[styles.settingText, { color: colors.text }]}>Privacy Checkup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingOption, { borderColor: colors.borderColor }]}>
          <Icon name="home" size={18} color={colors.secondary} style={styles.icon} />
          <Text style={[styles.settingText, { color: colors.text }]}>Supervision</Text>
        </TouchableOpacity>
      </View>

      {/* Section: Preferences */}
      <View style={styles.section}>
        <Text style={[styles.sectionLabel, { color: colors.text }]}>Preferences</Text>
        <TouchableOpacity
          style={[styles.settingOption, { borderColor: colors.borderColor }]}
          onPress={toggleDarkMode}
        >
          <Icon
            name={isDarkMode ? 'sun-o' : 'moon-o'}
            size={18}
            color={colors.secondary}
            style={styles.icon}
          />
          <Text style={[styles.settingText, { color: colors.text }]}>Dark Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingOption, { borderColor: colors.borderColor }]}>
          <Icon name="bell" size={18} color={colors.secondary} style={styles.icon} />
          <Text style={[styles.settingText, { color: colors.text }]}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingOption, { borderColor: colors.borderColor }]}>
          <Icon name="language" size={18} color={colors.secondary} style={styles.icon} />
          <Text style={[styles.settingText, { color: colors.text }]}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingOption, { borderColor: colors.borderColor }]}>
          <Icon name="universal-access" size={18} color={colors.secondary} style={styles.icon} />
          <Text style={[styles.settingText, { color: colors.text }]}>Accessibility</Text>
        </TouchableOpacity>
      </View>

      {/* Section: Legal Policies */}
      <View style={styles.section}>
        <Text style={[styles.sectionLabel, { color: colors.text }]}>Legal Policies</Text>
        <TouchableOpacity style={[styles.settingOption, { borderColor: colors.borderColor }]}>
          <Icon name="file" size={18} color={colors.secondary} style={styles.icon} />
          <Text style={[styles.settingText, { color: colors.text }]}>Terms of Service</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.footerSpacing, { backgroundColor: colors.background }]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  section: {
    marginBottom: 20,
    paddingVertical: 10,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  settingText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
    textAlign: 'left',
  },
  icon: {
    marginRight: 15,
  },
  footerSpacing: {
    height: 50,
  },
});

export default Settings;

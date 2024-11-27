import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.heading}>My Portfolio</Text>

      <View style={styles.features}>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="briefcase" size={30} color="#0056B3" />
          <Text style={styles.featureText}>Work Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="graduation-cap" size={30} color="#0056B3" />
          <Text style={styles.featureText}>Education</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="folder" size={30} color="#0056B3" />
          <Text style={styles.featureText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="comment" size={30} color="#0056B3" />
          <Text style={styles.featureText}>Blog</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.contactHeading}>Contact Me</Text>
      <View style={styles.socialLinks}>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="linkedin" size={30} color="#0056B3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="facebook" size={30} color="#0056B3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="instagram" size={30} color="#0056B3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="envelope" size={30} color="#0056B3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="discord" size={30} color="#0056B3" />
        </TouchableOpacity>
      </View>
      <View style={styles.footerSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureText: {
    fontSize: 16,
    color: '#0056B3',
    marginTop: 5,
  },
  contactHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialIcon: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#F1F1F1',
  },
  footerSpacing: {
    height: 50,
  },
});

export default Home;

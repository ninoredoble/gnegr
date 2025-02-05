import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const [progress, setProgress] = useState(new Animated.Value(0)); // Animated value for progress bar

  // Function to animate progress
  const startProgress = () => {
    Animated.timing(progress, {
      toValue: 1, // 100% progress
      duration: 1000, // Animation duration
      useNativeDriver: false, // Native driver for width animation
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.summarySection}>
        <Text style={styles.summaryText}>
          I am a passionate developer with experience in mobile app development. 
          Let's connect and collaborate on exciting projects!
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.cvSection}>
        <Image
          source={require('../../../assets/cv.png')}
          style={styles.cvImage}
        />
      </View>

      <View style={styles.portfolioSection}>
        <Text style={styles.sectionTitle}>Portfolio</Text>

        <TouchableOpacity style={styles.featureCard}>
          <Icon name="desktop" size={24} color="#F2F2F2" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Mobile App Development</Text>
            <Text style={styles.cardDescription}>Created apps using React Native and Expo.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard}>
          <Icon name="laptop" size={24} color="#F2F2F2" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Web Development</Text>
            <Text style={styles.cardDescription}>Built responsive websites with React and Node.js.</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsSection}>
          <TouchableOpacity style={styles.skillCard}>
            <Text style={styles.skillText}>React Native</Text>
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBar,
                  { width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '90%'] }) }
                ]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skillCard}>
            <Text style={styles.skillText}>JavaScript</Text>
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBar,
                  { width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '85%'] }) }
                ]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skillCard}>
            <Text style={styles.skillText}>Node.js</Text>
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBar,
                  { width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '75%'] }) }
                ]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skillCard}>
            <Text style={styles.skillText}>UI/UX Design</Text>
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBar,
                  { width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '80%'] }) }
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.contactSection}>
          <TouchableOpacity style={styles.contactCard}>
            <View style={styles.iconCircle}>
              <Icon name="envelope" size={20} color="#0056B3" />
            </View>
            <Text style={styles.contactText}>Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactCard}>
            <View style={styles.iconCircle}>
              <Icon name="linkedin" size={20} color="#0056B3" />
            </View>
            <Text style={styles.contactText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactCard}>
            <View style={styles.iconCircle}>
              <Icon name="instagram" size={20} color="#0056B3" />
            </View>
            <Text style={styles.contactText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactCard}>
            <View style={styles.iconCircle}>
              <Icon name="facebook" size={20} color="#0056B3" />
            </View>
            <Text style={styles.contactText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={startProgress} style={styles.buttonContainer}>
        <View style={styles.simpleButton}>
          <Icon name="rocket" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Start Progress</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerSection: {
    alignItems: 'center',
  
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: -30,
  },
  summarySection: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    padding: 20,
    marginVertical: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  summaryText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#E0E0E0',
    alignSelf: 'center',
    marginVertical: 5,
  },
  cvSection: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cvImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
  portfolioSection: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A0A0A0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  skillsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  skillCard: {
    backgroundColor: '#0056B3',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  skillText: {
    fontSize: 14,
    color: '#FFF',
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#76C7C0',
    borderRadius: 5,
  },
  contactSection: {
    marginBottom: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    width: '90%',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconCircle: {
    backgroundColor: '#E0E0E0',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  simpleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0056B3',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#FFF',
  },
});

export default Home;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

// Replace with your image path
const ONBOARDING_IMAGE = require('../assets/images/onboarding.png');

export default function OnboardingScreen({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#eac6c6" />
      <View style={styles.imageContainer}>
        <Image
          source={ONBOARDING_IMAGE}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.brandingSection}>
          <Text style={styles.brandName}>Viorra</Text>
          <Text style={styles.tagline}>Your Beauty, Delivered.</Text>
        </View>
        <View style={styles.actionSection}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarBackground}>
              <View style={styles.progressBarFilled} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eac6c6', // Soft pink
  },
  imageContainer: {
    flex: 6,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  brandingSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  textContainer: {
    flex: 4, // Give it a reasonable share. Adjust flex:6 and flex:4 as needed
    backgroundColor: '#E8C1C1', // or remove this if background should match whole screen
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  tagline: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontWeight: '300',
  },
  actionSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  getStartedButton: {
    backgroundColor: '#ba5662',
    paddingVertical: 16,
    paddingHorizontal: 42,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 22,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  brandName: {
    fontFamily: 'Italiana',
    fontWeight: '400',
    fontSize: 60,
    lineHeight: 64, // Try 21 for 1-line, or ~64 for better vertical centering
    letterSpacing: -0.32,
    textAlign: 'center',
    color: '#fff',
  },

  progressBarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  progressBarBackground: {
    width: 120,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f5dedb',
    overflow: 'hidden',
    flexDirection: 'row',
  },

  progressBarFilled: {
    width: '47%',
    height: '100%',
    backgroundColor: '#ecd2cc',
    borderRadius: 5,
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F8BBD9" />
      
      {/* Top spacing */}
      <View style={styles.topSpacing} />
      
      {/* Product Display Image - positioned in middle section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/onboarding.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Branding Section - below the image */}
      <View style={styles.brandingSection}>
        <Text style={styles.brandName}>Viorra</Text>
        <Text style={styles.tagline}>Your Beauty, Delivered.</Text>
      </View>

      {/* Call to Action - at the bottom */}
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
        {/* Progress Indicator */}
        <View style={styles.progressIndicator}>
          <View style={styles.progressDot} />
          <View style={styles.progressDotActive} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BBD9', // Soft pink background
    paddingHorizontal: 20,
  },
  
  topSpacing: {
    height: 80, // Space for status bar and top area
  },
  
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  
  image: {
    width: '90%',
    height: '50%',
    maxHeight: 350,
  },
  
  brandingSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  
  brandName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'serif',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  
  tagline: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  
  actionSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  
  getStartedButton: {
    backgroundColor: '#C2185B', // Deep rose color matching the button in the image
    paddingVertical: 18,
    paddingHorizontal: 52,
    borderRadius: 30,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  
  progressIndicator: {
    flexDirection: 'row',
    gap: 16,
  },
  
  progressDot: {
    width: 28,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white
    borderRadius: 5,
  },
  
  progressDotActive: {
    width: 28,
    height: 10,
    backgroundColor: '#C2185B', // Dark rose
    borderRadius: 5,
  },
});

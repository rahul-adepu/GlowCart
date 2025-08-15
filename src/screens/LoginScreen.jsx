import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

const HARD_CODED_EMAIL = 'olivia@gmail.com';
const HARD_CODED_PASSWORD = 'Glow@123';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (
      email.trim().toLowerCase() === HARD_CODED_EMAIL &&
      password === HARD_CODED_PASSWORD
    ) {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Invalid credentials',
        `Use:\nEmail: ${HARD_CODED_EMAIL}\nPassword: ${HARD_CODED_PASSWORD}`,
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1B0B0" />

      {/* Top Section with Curved Bottom */}
      <View style={styles.topSection}>
        <Text style={styles.greetingTitle}>Hello Again!</Text>
        <Text style={styles.greetingSubtitle}>
          Welcome back you’ve been missed.
        </Text>
      </View>

      {/* Middle Section - Input Fields */}
      <View style={styles.inputSection}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email Id"
            placeholderTextColor="#888888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showPasswordContainer}
          >
            <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Social Login Separator */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or Continue With</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Social Login Icons */}
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>F</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section - Registration Prompt */}
      <View style={styles.bottomSection}>
        <Text style={styles.registerPrompt}>Not a Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1B0B0', // Light off-white pink background
  },

  topSection: {
    backgroundColor: '#B84953', // Dark rose color for top section
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    alignItems: 'center',
  },

  greetingTitle: {
    fontSize: 34, // Adjusted font size
    fontWeight: '800', // ExtraBold
    color: '#FFFFFF', // White color for text
    fontFamily: 'Playfair Display',
    marginBottom: 8,
  },

  greetingSubtitle: {
    fontSize: 26, // Adjusted font size
    fontWeight: '500', // Medium weight
    color: '#AD7373', // Another shade of pink
    fontFamily: 'Inter',
    textAlign: 'center',
  },

  inputSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },

  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  showPasswordContainer: {
    position: 'absolute',
    right: 20,
    top: '50%',
    marginTop: -12,
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  forgotPasswordText: {
    color: '#B84953',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  loginButton: {
    backgroundColor: '#B84953',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDDDDD',
  },

  separatorText: {
    color: '#888888',
    fontSize: 14,
    marginHorizontal: 15,
  },

  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
  },

  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  socialButtonText: {
    fontSize: 20,
    fontWeight: '600',
  },

  bottomSection: {
    paddingHorizontal: 30,
    paddingBottom: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  registerPrompt: {
    color: '#888888',
    fontSize: 16,
  },

  registerLink: {
    color: '#B84953',
    fontWeight: '600',
    fontSize: 16,
  },
});

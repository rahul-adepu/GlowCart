import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCE4EC" />
      
      {/* Top Section with Curved Bottom */}
      <View style={styles.topSection}>
        <Text style={styles.greetingTitle}>Hello Again!</Text>
        <Text style={styles.greetingSubtitle}>Welcome back you've been missed.</Text>
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
          <Text style={styles.inputIcon}>✉️</Text>
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
            style={styles.inputIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
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
            <Text style={styles.socialButtonText}>🍎</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>f</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section - Registration Prompt */}
      <View style={styles.bottomSection}>
        <View style={styles.registerRow}>
          <Text style={styles.registerPrompt}>Not a Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF7F7', // Light off-white pink background
  },
  
  topSection: {
    backgroundColor: '#FCE4EC', // Light pink background
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  
  greetingTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#C2185B', // Dark rose color
    fontFamily: 'serif',
    marginBottom: 8,
  },
  
  greetingSubtitle: {
    fontSize: 16,
    color: '#888888',
    fontFamily: 'sans-serif',
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
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 20,
    paddingRight: 50,
    fontSize: 16,
    color: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  inputIcon: {
    position: 'absolute',
    right: 20,
    top: '50%',
    marginTop: -12,
    fontSize: 20,
  },
  
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  
  forgotPasswordText: {
    color: '#C2185B',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  
  loginButton: {
    backgroundColor: '#C2185B',
    borderRadius: 15,
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
  },
  
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  registerText: {
    fontSize: 16,
    textAlign: 'center',
  },
  
  registerPrompt: {
    color: '#888888',
    fontSize: 16,
  },
  
  registerLink: {
    color: '#C2185B',
    fontWeight: '600',
    fontSize: 16,
  },
});

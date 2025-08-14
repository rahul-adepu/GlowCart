import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1B0B0" />

      {/* Top header with curved bottom */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Join The Glow!</Text>
      </View>

      {/* Form card (exact size/position) */}
      <View style={styles.formCard}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#888888"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#888888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.inputIcon}>✉️</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.inputIcon} onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? '\ud83d\udc41️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#888888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity style={styles.inputIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Text>{showConfirmPassword ? '\ud83d\udc41️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Create Account Button */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom link */}
      <View style={styles.bottomSection}>
        <Text style={styles.bottomPrompt}>Already a Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.bottomLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF7F7',
  },
  
  topSection: {
    backgroundColor: '#F1B0B0',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  
  title: {
    fontFamily: 'Playfair Display',
    fontWeight: '800',
    fontSize: 34,
    lineHeight: 34, // 100%
    letterSpacing: 0.68, // 2%
    textAlign: 'center',
    color: '#B84953',
  },

  // Exact form card sizing and position
  formCard: {
    position: 'absolute',
    top: 244,
    left: 27,
    width: 375,
    height: 320,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },

  inputContainer: {
    position: 'relative',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    paddingRight: 48,
    fontSize: 16,
    color: '#333333',
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },

  inputIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: -12,
    fontSize: 18,
  },

  buttonRow: {
    position: 'absolute',
    left: 27,
    right: 27,
    top: 244 + 320 + 36,
  },

  createAccountButton: {
    backgroundColor: '#B84953',
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  createAccountText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },

  bottomSection: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomPrompt: {
    color: '#888888',
    fontSize: 16,
  },

  bottomLink: {
    color: '#B84953',
    fontSize: 16,
    fontWeight: '600',
  },
});

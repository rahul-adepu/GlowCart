import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Keyboard, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(40);

  React.useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardVisible(true);
      setKeyboardOffset(e?.endCoordinates?.height ? e.endCoordinates.height + 12 : 40);
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      setKeyboardOffset(40);
    });
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1B0B0" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          {/* Top header with curved bottom */}
          <View style={styles.topSection}>
            <Text style={styles.title}>Join The Glow!</Text>
          </View>

          {/* Form card */}
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
                placeholderTextColor="#8A8A8A"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <MaterialCommunityIcons name="email-outline" color="#B07C7D" size={22} style={styles.iconRight} />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#8A8A8A"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity style={styles.iconRight} onPress={() => setShowPassword(!showPassword)}>
                <MaterialCommunityIcons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#B07C7D" />
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#8A8A8A"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity style={styles.iconRight} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <MaterialCommunityIcons name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#B07C7D" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Create Account Button */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.createAccountButton}>
              <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        {/* Bottom link pinned to bottom, moves above keyboard */}
        <View style={[styles.bottomSection, keyboardVisible && { bottom: keyboardOffset }] }>
          <Text style={styles.bottomPrompt}>Already a Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bottomLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBE5DE',
  },
  
  topSection: {
    backgroundColor: '#E3A6A6',
    paddingTop: 36,
    paddingBottom: 36,
    // paddingHorizontal: 30,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontFamily: 'serif',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: 0.68,
    textAlign: 'center',
    color: '#B84953',
  },

  // Exact form card sizing and position
  formCard: {
    marginTop: 28,
    paddingHorizontal: 22,
    gap: 14,
  },

  inputContainer: {
    // position: 'relative',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    paddingRight: 50,
    fontSize: 16,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#E6D0D0',
  },

  iconRight: {
    position: 'absolute',
    right: 18,
    top: '50%',
    marginTop: -12,
  },

  buttonRow: {
    paddingHorizontal: 27,
    marginTop: 24,
  },

  createAccountButton: {
    backgroundColor: '#C14F55',
    borderRadius: 18,
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
    left: 0,
    right: 0,
    bottom: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
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

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E3A6A6" />

      <View style={styles.topSection}>
        <Text style={styles.greetingTitle}>Hello Again!</Text>
        <Text style={styles.greetingSubtitle}>
          Welcome back you’ve been missed.
        </Text>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email Id"
            placeholderTextColor="#8A8A8A"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <MaterialCommunityIcons
            name="email-outline"
            size={22}
            color="#B07C7D"
            style={styles.inputRightIcon}
          />
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
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.inputRightIcon}
            accessibilityRole="button"
            accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
          >
            <MaterialCommunityIcons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color="#B07C7D"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or Continue With</Text>
          <View style={styles.separatorLine} />
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={34} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="apple1" size={34} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="facebook-square" size={34} color="#1877F2" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.registerPrompt}>Not a Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 30,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    alignItems: 'center',
  },

  greetingTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: '#A33B40',
    fontFamily: 'serif',
    marginBottom: 10,
  },

  greetingSubtitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#B87C7C',
    fontFamily: 'System',
    textAlign: 'center',
  },

  inputSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 32,
  },

  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  inputRightIcon: {
    position: 'absolute',
    right: 18,
    top: '50%',
    marginTop: -12,
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  forgotPasswordText: {
    color: '#C14F55',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  loginButton: {
    backgroundColor: '#C14F55',
    borderRadius: 18,
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
    fontSize: 20,
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
    backgroundColor: '#D8C1C1',
  },

  separatorText: {
    color: '#9C8C8C',
    fontSize: 16,
    marginHorizontal: 15,
  },

  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 26,
    marginBottom: 40,
  },

  socialButton: {
    width: 70,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  bottomSection: {
    paddingHorizontal: 30,
    paddingBottom: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  registerPrompt: {
    color: '#8D8D8D',
    fontSize: 16,
  },

  registerLink: {
    color: '#C14F55',
    fontWeight: '600',
    fontSize: 16,
  },
});

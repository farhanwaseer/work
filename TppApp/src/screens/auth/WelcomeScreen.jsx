import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.logo}>
          <Ionicons name="bus" size={48} color="white" />
        </View>
        <Text style={styles.title}>Island Drive</Text>
        <Text style={styles.subtitle}>Track your bus in real-time</Text>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2563eb' },
  inner: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
  },
  title: { fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: '#cfe2ff', marginBottom: 32 },
  signInButton: {
    width: '80%',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 12
  },
  signInText: { color: '#2563eb', fontWeight: '600', textAlign: 'center' },
  registerButton: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8
  },
  registerText: { color: 'white', fontWeight: '600', textAlign: 'center' }
});

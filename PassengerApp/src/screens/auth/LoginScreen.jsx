// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

// export default function LoginScreen({ onLogin, navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Sign In</Text>

//       <TextInput
//         placeholder="Email or Student ID"
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Password"
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <Button title="Sign In" onPress={onLogin} />

//       <View style={styles.footer}>
//         <Text>Don't have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//           <Text style={styles.link}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, justifyContent: 'center' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 16
//   },
//   footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
//   link: { color: '#2563eb', fontWeight: '600' }
// });

// without logic

// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";

// export default function LoginScreen({ onLogin, navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Sign In</Text>

//       <TextInput placeholder="Email or Student ID" style={styles.input} />
//       <TextInput placeholder="Password" style={styles.input} secureTextEntry />

//       {/* Bypass login: directly call onLogin to grant access to main app */}
//       <Button title="Sign In" onPress={onLogin} />

//       <View style={styles.footer}>
//         <Text>Don't have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("Register")}>
//           <Text style={styles.link}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, justifyContent: "center" },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   footer: { flexDirection: "row", justifyContent: "center", marginTop: 16 },
//   link: { color: "#2563eb", fontWeight: "600" },
// });



import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthContext";

export default function LoginScreen({ navigation }) {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    setLoading(true);
    const result = await loginUser(email, password);
    setLoading(false);

    if (result.success) {
      Alert.alert("Success", "Logged in successfully");
      console.log("Success", "Logged in successfully")
      // Navigation will be handled by App.js when isLoggedIn changes
    } else {
      Alert.alert("Login Failed", result.error);
      console.log("Login Failed", result.error)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title={loading ? "Signing in..." : "Sign In"}
        onPress={handleLogin}
        disabled={loading}
      />

      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 16 },
  link: { color: "#2563eb", fontWeight: "600" },
});


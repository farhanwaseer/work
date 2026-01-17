import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// export default function DriverLogin({ setIsLoggedIn }) {
export default function DriverLogin({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#2563eb", "#1d4ed8"]} style={styles.header}>
        <View style={styles.iconWrapper}>
          <Ionicons name="bus" size={40} color="#fff" />
        </View>

        <Text style={styles.title}>Driver Portal</Text>
        <Text style={styles.subtitle}>College Transportation</Text>
      </LinearGradient>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+1 234-567-8900"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(true)} >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity> */}
      <TouchableOpacity
  style={styles.button}
  onPress={() => {
    navigation.replace("MainApp"); // instant login
  }}
>
  <Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // borderRadius: 16,
    overflow: "hidden",
    flex: 1,
  },
  header: {
    padding: 32,
    alignItems: "center",
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#dbeafe",
    fontSize: 14,
  },
  form: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  field: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    color: "#374151",
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

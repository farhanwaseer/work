import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen({ navigation }) {
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace("Login");
      }, 1200);
    });
  }, []);

  return (
    <LinearGradient colors={["#2563eb", "#1d4ed8"]} style={styles.container}>
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        <Ionicons name="bus" size={90} color="#fff" />
      </Animated.View>

      <Text style={styles.title}>Driver Portal</Text>
      <Text style={styles.subtitle}>College Transportation</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 16,
  },
  subtitle: {
    color: "#dbeafe",
    marginTop: 6,
  },
});

import * as React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.para}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 40,
    fontSize: 50,
    color: "#131816ff",
    textAlign: "center",
  },
  para: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#0d0e0dff",
    textAlign: "center",
  },
});

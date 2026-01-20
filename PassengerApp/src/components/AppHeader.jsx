import * as React from "react";
import { View, Text, StyleSheet, useContext } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../contextApi/AuthContext";

export default function AppHeader({ isOnDuty = true }) {
  const { user } = React.useContext(AuthContext);

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.row}>
        {/* Left: Icon + Text */}
        <View style={headerStyles.left}>
          <Ionicons name="bus" size={32} color="#f2f4f7" />

          <View style={headerStyles.textContainer}>
            <Text style={headerStyles.subtitle}>Welcome back</Text>
            <Text style={headerStyles.title}>{user?.name || "Guest"}</Text>
          </View>
        </View>

        
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 13,
    color: "#e5e7eb",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    color: "white",
    fontWeight: "700",
  },
});
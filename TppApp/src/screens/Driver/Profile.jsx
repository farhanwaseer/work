import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { AuthContext } from "../../contextApi/AuthContext";

export default function Profile() {
  const { logoutUser, user } = useContext(AuthContext);

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          await logoutUser();
        },
        style: "destructive",
      },
    ]);
  };

  // Get initials from user name
  const getInitials = () => {
    if (user?.name) {
      return user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
    return "JS";
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{getInitials()}</Text>
      </View>

      <Text style={styles.name}>{user?.name || "John Smith"}</Text>
      <Text style={styles.small}>Driver ID: DRV-001</Text>

      <View style={styles.card}>
        <Text style={styles.item}>Bus: #7</Text>
        <Text style={styles.item}>Route: A</Text>
        <Text style={styles.item}>License: DL12345</Text>
      </View>

      <Pressable style={styles.btn}>
        <Text>Edit Profile</Text>
      </Pressable>

      <Pressable
        onPress={handleLogout}
        style={[styles.btn, { borderColor: "#dc2626" }]}
      >
        <Text style={{ color: "#dc2626" }}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  small: {
    color: "#6b7280",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
  },
  item: {
    paddingVertical: 6,
  },
  btn: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
    alignItems: "center",
    marginBottom: 10,
  },
});

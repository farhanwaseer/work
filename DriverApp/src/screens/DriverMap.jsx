import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

export default function DriverMap() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 33.6844,
          longitude: 73.0479,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: 33.6844, longitude: 73.0479 }}>
          <Ionicons name="bus" size={30} color="#2563eb" />
        </Marker>
      </MapView>

      {/* Bottom Panel */}
      <View style={styles.panel}>
        <View style={styles.row}>
          <Ionicons name="location" size={20} color="#2563eb" />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Main Campus Gate</Text>
            <Text style={styles.small}>ETA: 5 minutes</Text>
          </View>
          <View style={styles.badge}>
            <Text style={{ color: "#fff" }}>Next</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.outlineBtn}>
            <Text>Skip</Text>
          </Pressable>
          <Pressable style={styles.greenBtn}>
            <Text style={{ color: "#fff" }}>Arrived</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  small: {
    fontSize: 12,
    color: "#6b7280",
  },
  badge: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  outlineBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  greenBtn: {
    flex: 1,
    backgroundColor: "#16a34a",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
});

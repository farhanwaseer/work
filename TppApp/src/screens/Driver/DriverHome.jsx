import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DriverHome() {
  const [tripActive, setTripActive] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Assigned Route */}
      <View style={[styles.card, styles.blueCard]}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.label}>Assigned Route</Text>
            <Text style={styles.title}>Route A - Morning Shift</Text>
          </View>
          <Ionicons name="bus" size={32} color="#2563eb" />
        </View>

        <View style={styles.grid}>
          <View>
            <Text style={styles.label}>Bus Number</Text>
            <Text style={styles.value}>Bus #7</Text>
          </View>
          <View>
            <Text style={styles.label}>Total Stops</Text>
            <Text style={styles.value}>12 Stops</Text>
          </View>
        </View>
      </View>

      {/* Next Stop */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.iconCircleGreen}>
            <Ionicons name="location" size={20} color="#16a34a" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Next Stop</Text>
            <Text style={styles.title}>Main Campus Gate</Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.blueText}>2.3 km</Text>
            <Text style={styles.small}>5 mins</Text>
          </View>
        </View>

        <View style={styles.row}>
            <View style={styles.stopCard}>

          <Ionicons name="people" size={16} color="#9ca3af" />
          <Text style={styles.small}> 8 passengers waiting</Text>
            </View>
        </View>
      </View>

      {/* Trip Control */}
      <Pressable
        style={[
          styles.actionBtn,
          { backgroundColor: tripActive ? "#dc2626" : "#16a34a" },
        ]}
        onPress={() => setTripActive(!tripActive)}
      >
        <Ionicons
          name={tripActive ? "square" : "play"}
          size={20}
          color="#fff"
        />
        <Text style={styles.btnText}>
          {tripActive ? " End Trip" : " Start Trip"}
        </Text>
      </Pressable>

      {/* Trip Stats */}
      {tripActive && (
        <View style={styles.statsRow}>
          {[
            { label: "Duration", value: "42 min" },
            { label: "Distance", value: "12.5 km" },
            { label: "Passengers", value: "24" },
          ].map((item, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.small}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Upcoming Stops */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Upcoming Stops</Text>

        {[
          { name: "Main Campus Gate", time: "5 mins", next: true },
          { name: "Library Block", time: "12 mins" },
          { name: "Sports Complex", time: "18 mins" },
        ].map((stop, i) => (
          <View key={i} style={styles.stopRow}>
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: stop.next ? "#dbeafe" : "#f3f4f6" },
              ]}
            >
              <Ionicons
                name="location"
                size={16}
                color={stop.next ? "#2563eb" : "#9ca3af"}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.value}>{stop.name}</Text>
              <Text style={styles.small}>Passengers waiting</Text>
            </View>

            <Text
              style={[
                styles.small,
                { color: stop.next ? "#2563eb" : "#6b7280" },
              ]}
            >
              {stop.time}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    elevation: 2,
  },

  blueCard: {
    backgroundColor: "#eff6ff",
    borderWidth: 1,
    padding: 20,
    borderColor: "#bfdbfe",
  },
  stopCard : {
    flexDirection: "row",
    padding: 5,
    gap: 5,
    marginTop: 20,
    
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  label: {
    fontSize: 12,
    color: "#6b7280",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },

  small: {
    fontSize: 12,
    color: "#6b7280",
  },

  blueText: {
    color: "#2563eb",
    fontWeight: "500",
  },

  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  iconCircleGreen: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
    alignItems: "center",
  },

  actionBtn: {
    height: 56,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },

  stopRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 12,
  },
});

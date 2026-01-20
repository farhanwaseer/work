// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Header from '../components/Header';
// import { Ionicons } from '@expo/vector-icons';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Header title="Alice Cooper" />

//       <View style={styles.card}>
//         <View style={styles.iconContainer}>
//           <Ionicons name="bus" size={32} color="#2563eb" />
//         </View>
//         <Text style={styles.title}>Bus #7 – Route A</Text>
//         <Text style={styles.text}>ETA: 8 minutes</Text>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Track on Map</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, elevation: 3, marginTop: 16 },
//   iconContainer: { marginBottom: 12 },
//   title: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
//   text: { color: '#555', marginBottom: 12 },
//   button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8 },
//   buttonText: { color: '#fff', textAlign: 'center' }
// });

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function PassengerHome() {
  const navigation = useNavigation();

  const schedule = [
    {
      time: "8:45 AM",
      route: "Route A",
      status: "completed",
      label: "Completed",
    },
    {
      time: "2:30 PM",
      route: "Route A",
      status: "upcoming",
      label: "Upcoming",
    },
    {
      time: "5:45 PM",
      route: "Route A",
      status: "scheduled",
      label: "Scheduled",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Active Bus Info */}
      <View style={[styles.card, styles.activeBusCard]}>
        <View style={styles.busHeader}>
          <View style={styles.busIcon}>
            <Feather name="truck" size={24} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.smallText}>Your Bus</Text>
            <Text style={styles.bigText}>Bus #7 - Route A</Text>
          </View>
          <View style={styles.badgeActive}>
            <Text style={styles.badgeText}>Active</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <View style={styles.infoLabel}>
              <Feather name="map-pin" size={16} color="#2563EB" />
              <Text style={styles.smallText}>Current Location</Text>
            </View>
            <Text style={styles.bigText}>Library Block</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoLabel}>
              <Feather name="clock" size={16} color="#2563EB" />
              <Text style={styles.smallText}>ETA to your stop</Text>
            </View>
            <Text style={[styles.bigText, { color: "#2563EB" }]}>
              8 minutes
            </Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoLabel}>
              <Feather name="navigation" size={16} color="#2563EB" />
              <Text style={styles.smallText}>Distance</Text>
            </View>
            <Text style={styles.bigText}>3.2 km away</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.trackButton}
          onPress={() => navigation.navigate("Track")}
        >
          <Feather name="map-pin" size={16} color="#fff" />
          <Text style={styles.trackButtonText}> Track on Map</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Stats */}
      <View style={styles.quickStats}>
        <View
          style={[
            styles.card,
            { flex: 1, marginRight: 6, alignItems: "center" },
          ]}
        >
          <View style={styles.statIconPurple}>
            <Feather name="truck" size={20} color="#6B21A8" />
          </View>
          <Text style={styles.smallText}>This Week</Text>
          <Text style={styles.bigText}>12 trips</Text>
        </View>

        <View
          style={[
            styles.card,
            { flex: 1, marginLeft: 6, alignItems: "center" },
          ]}
        >
          <View style={styles.statIconGreen}>
            <Feather name="clock" size={20} color="#15803D" />
          </View>
          <Text style={styles.smallText}>Avg. Wait Time</Text>
          <Text style={styles.bigText}>6 mins</Text>
        </View>
      </View>

      {/* My Stop */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>My Regular Stop</Text>
        <Text style={styles.cardDescription}>Main Campus Gate</Text>
        <View style={styles.stopBox}>
          <Feather name="map-pin" size={20} color="#2563EB" />
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text style={styles.bigText}>Stop #3 on Route A</Text>
            <Text style={styles.smallText}>Usually arrives at 8:45 AM</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={{ color: "#2563EB" }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Schedule */}
      <View style={[styles.card, { marginBottom: 32 }]}>
        <Text style={styles.cardTitle}>Today's Schedule</Text>
        {schedule.map((item, idx) => (
          <View key={idx} style={styles.scheduleRow}>
            <View style={styles.scheduleInfo}>
              <View
                style={[
                  styles.scheduleIcon,
                  item.status === "completed"
                    ? { backgroundColor: "#E5E7EB" }
                    : item.status === "upcoming"
                      ? { backgroundColor: "#DBEAFE" }
                      : { backgroundColor: "#F3F4F6" },
                ]}
              >
                <Feather
                  name="clock"
                  size={20}
                  color={
                    item.status === "completed"
                      ? "#9CA3AF"
                      : item.status === "upcoming"
                        ? "#2563EB"
                        : "#9CA3AF"
                  }
                />
              </View>
              <View>
                <Text style={styles.bigText}>{item.time}</Text>
                <Text style={styles.smallText}>{item.route}</Text>
              </View>
            </View>
            <View
              style={[
                styles.badge,
                item.status === "upcoming"
                  ? { backgroundColor: "#2563EB" }
                  : { backgroundColor: "#9CA3AF" },
              ]}
            >
              <Text style={styles.badgeText}>{item.label}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// ... rest of styles unchanged

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F9FAFB" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  activeBusCard: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    borderWidth: 1,
  },
  busHeader: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  busIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  badgeActive: {
    backgroundColor: "#16A34A",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  infoBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  infoLabel: { flexDirection: "row", alignItems: "center", gap: 4 },
  smallText: { fontSize: 12, color: "#6B7280" },
  bigText: { fontSize: 14, color: "#111827" },
  trackButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    borderRadius: 8,
  },
  trackButtonText: { color: "#fff", fontWeight: "600", marginLeft: 4 },
  quickStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16, // spacing below the row
  },

  statIconPurple: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E9D5FF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 4,
  },
  statIconGreen: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 4,
  },
  cardTitle: { fontSize: 16, fontWeight: "600", marginBottom: 2 },
  cardDescription: { fontSize: 12, color: "#6B7280", marginBottom: 8 },
  stopBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 12,
    borderRadius: 8,
  },
  editButton: { paddingHorizontal: 12, paddingVertical: 4 },
  scheduleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  scheduleInfo: { flexDirection: "row", alignItems: "center", gap: 8 },
  scheduleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  badge: { paddingVertical: 2, paddingHorizontal: 8, borderRadius: 12 },
});

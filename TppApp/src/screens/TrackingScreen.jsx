// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function TrackingScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Map & Live Bus Tracking Placeholder</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
//   text: { fontSize: 16, color: '#444' }
// });

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Badge, Button } from 'react-native-paper';
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';

export default function PassengerTracking() {
  const stops = [
    { top: '25%', left: '30%', name: 'Bus #7', active: false, bus: true },
    { top: '35%', left: '45%', name: 'Library', active: false },
    { top: '50%', left: '60%', name: 'Your Stop', active: true },
    { top: '65%', left: '75%', name: 'Hostel', active: false },
  ];

  return (
    <View style={styles.container}>
      {/* Mock Map Background */}
      <View style={styles.mapBackground}>
        {stops.map((stop, idx) => (
          <View
            key={idx}
            style={[
              styles.stopMarker,
              {
                top: stop.top,
                left: stop.left,
                backgroundColor: stop.active ? '#10B981' : '#fff',
                borderColor: stop.active ? '#059669' : '#3B82F6',
              },
            ]}
          >
            {stop.bus ? (
              <MaterialCommunityIcons name="bus" size={20} color={stop.active ? '#fff' : '#3B82F6'} />
            ) : (
              <Entypo name="location-pin" size={20} color={stop.active ? '#fff' : '#3B82F6'} />
            )}
            <View style={styles.stopLabel}>
              <Text style={styles.stopLabelText}>{stop.name}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Top Info Card */}
      <View style={styles.topCardContainer}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.cardRow}>
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons name="bus" size={24} color="#3B82F6" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Bus #7 - Route A</Text>
                <Text style={styles.cardSubtitle}>Driver: John Smith</Text>
              </View>
              <Badge style={{ backgroundColor: '#10B981', color: '#fff' }}>Moving</Badge>
            </View>
          </Card.Content>
        </Card>
      </View>

      {/* Bottom Info Card */}
      <View style={styles.bottomCardContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardRow}>
              <Entypo name="location-pin" size={20} color="#10B981" style={{ marginTop: 2 }} />
              <View style={{ flex: 1, marginLeft: 8 }}>
                <Text style={styles.cardTitle}>Main Campus Gate</Text>
                <Text style={styles.cardSubtitle}>Stop #3 on Route A</Text>
              </View>
            </View>

            <View style={styles.infoGrid}>
              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>ETA</Text>
                <Text style={styles.infoValue}>8 mins</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Distance</Text>
                <Text style={styles.infoValue}>3.2 km</Text>
              </View>
            </View>

            <Button
              mode="outlined"
              style={styles.messageButton}
              icon={() => <Feather name="message-circle" size={16} />}
            >
              Message Driver
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0F2FE' },
  mapBackground: { flex: 1, position: 'relative' },
  stopMarker: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopLabel: {
    position: 'absolute',
    top: 45,
    left: '50%',
    transform: [{ translateX: -50 }],
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  stopLabelText: { fontSize: 10, color: '#111827' },
  topCardContainer: { position: 'absolute', top: 16, left: 16, right: 16, zIndex: 10 },
  bottomCardContainer: { position: 'absolute', bottom: 80, left: 16, right: 16, zIndex: 10 },
  card: { elevation: 3 },
  cardContent: { paddingVertical: 12 },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cardIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#DBEAFE', alignItems: 'center', justifyContent: 'center' },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#111827' },
  cardSubtitle: { fontSize: 12, color: '#6B7280' },
  infoGrid: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12 },
  infoBox: { flex: 1, backgroundColor: '#DBEAFE', padding: 8, borderRadius: 8, alignItems: 'center', marginHorizontal: 4 },
  infoLabel: { fontSize: 10, color: '#4B5563' },
  infoValue: { fontSize: 12, fontWeight: 'bold', color: '#3B82F6' },
  messageButton: { justifyContent: 'center' },
});

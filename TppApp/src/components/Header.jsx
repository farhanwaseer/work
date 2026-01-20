// import * as React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function AppHeader({ isOnDuty = true }) {
//   return (
//     <View style={headerStyles.container}>
//       <View style={headerStyles.row}>

//         {/* Left: Icon + Text */}
//         <View style={headerStyles.left}>
//           <Ionicons name="bus" size={32} color="#f2f4f7" />

//           <View style={headerStyles.textContainer}>
//             <Text style={headerStyles.title}>Driver Portal</Text>
//             <Text style={headerStyles.subtitle}>John Snow</Text>
//           </View>
//         </View>

//         {/* Right: Duty Status */}
//         <View
//           style={[
//             headerStyles.statusContainer,
//             { backgroundColor: isOnDuty ? "#16a34a" : "#dc2626" },
//           ]}
//         >
//           <Ionicons
//             name="ellipse"
//             size={10}
//             color="white"
//             style={{ marginRight: 6 }}
//           />
//           <Text style={headerStyles.statusText}>
//             {isOnDuty ? "ON DUTY" : "OFF DUTY"}
//           </Text>
//         </View>

//       </View>
//     </View>
//   );
// }



// const headerStyles = StyleSheet.create({
//   container: {
//     backgroundColor: "#2563eb",
//     paddingVertical: 12,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 12,
//   },
//   left: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   textContainer: {
//     flexDirection: "column",
//   },
//   title: {
//     fontSize: 16,
//     color: "white",
//     fontWeight: "700",
//   },
//   subtitle: {
//     fontSize: 13,
//     color: "#e5e7eb",
//   },
//   statusContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   statusText: {
//     fontSize: 12,
//     color: "white",
//     fontWeight: "700",
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ title, showBell = true, avatarInitials = 'AC', onBellPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{avatarInitials}</Text>
        </View>
        {/* Greeting */}
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.name}>{title}</Text>
        </View>
      </View>

      {showBell && (
        <TouchableOpacity onPress={onBellPress} style={styles.bellButton}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2563eb', // blue gradient color
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: 'white', fontWeight: 'bold' },
  greeting: { color: 'white', fontSize: 12, opacity: 0.9 },
  name: { color: 'white', fontSize: 16, fontWeight: '600' },
  bellButton: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});

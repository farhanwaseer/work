// import * as React from "react";
// import { View, Text, StyleSheet,Button } from "react-native";
// import { Ionicons } from "@expo/vector-icons";


// export default function LittleLemonHeader() {
//   return (
//     <View style={headerStyles.container}>
//       <View style={headerStyles.row}>
//         <Ionicons name="bus" size={32} color="#f2f4f7" />

//         <View style={headerStyles.textContainer}>
//           <Text style={headerStyles.title}>Driver Portal</Text>
//           <Text style={headerStyles.subtitle}>John Snow</Text>
//         </View>

//       </View>
//     </View>
//   );
// }


import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppHeader({ isOnDuty = true }) {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.row}>

        {/* Left: Icon + Text */}
        <View style={headerStyles.left}>
          <Ionicons name="bus" size={32} color="#f2f4f7" />

          <View style={headerStyles.textContainer}>
            <Text style={headerStyles.title}>Driver Portal</Text>
            <Text style={headerStyles.subtitle}>John Snow</Text>
          </View>
        </View>

        {/* Right: Duty Status */}
        <View
          style={[
            headerStyles.statusContainer,
            { backgroundColor: isOnDuty ? "#16a34a" : "#dc2626" },
          ]}
        >
          <Ionicons
            name="ellipse"
            size={10}
            color="white"
            style={{ marginRight: 6 }}
          />
          <Text style={headerStyles.statusText}>
            {isOnDuty ? "ON DUTY" : "OFF DUTY"}
          </Text>
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


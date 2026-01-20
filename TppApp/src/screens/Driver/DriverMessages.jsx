import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const messages = [
  { id: 1, from: "Admin", text: "Route updated", time: "10:30 AM" },
  { id: 2, from: "Passenger", text: "Reaching in 5 mins", time: "10:15 AM" },
];

export default function DriverMessages() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => (
          <View style={styles.msg}>
            <Text style={styles.from}>{item.from}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  msg: {
    padding: 16,
  },
  from: {
    fontWeight: "600",
  },
  text: {
    color: "#374151",
  },
  time: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 4,
  },
  sep: {
    height: 1,
    backgroundColor: "#e5e7eb",
  },
});

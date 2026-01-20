import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function PassengerNotifications() {
  const notifications = [
    { 
      id: 1, 
      type: 'arrival', 
      title: 'Bus Arriving Soon', 
      message: 'Bus #7 will arrive at your stop in 5 minutes', 
      time: '5 mins ago',
      unread: true 
    },
    { 
      id: 2, 
      type: 'delay', 
      title: 'Route Delay', 
      message: 'Route A experiencing 10-minute delay due to traffic', 
      time: '1 hour ago',
      unread: true 
    },
    { 
      id: 3, 
      type: 'announcement', 
      title: 'New Route Available', 
      message: 'Route E now serves the new hostel area', 
      time: '3 hours ago',
      unread: false 
    },
    { 
      id: 4, 
      type: 'info', 
      title: 'Trip Completed', 
      message: 'Your morning trip on Bus #7 has been completed', 
      time: 'Yesterday',
      unread: false 
    },
  ];

  const getBgColor = (type) => {
    switch(type) {
      case 'arrival': return '#D1FAE5'; // green-100
      case 'delay': return '#FFE8D6'; // orange-100
      case 'announcement': return '#DBEAFE'; // blue-100
      default: return '#F3F4F6'; // gray-100
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'arrival': return <Ionicons name="notifications-outline" size={20} color="#16A34A" />; // green
      case 'delay': return <Ionicons name="time-outline" size={20} color="#EA580C" />; // orange
      case 'announcement': return <MaterialCommunityIcons name="bus" size={20} color="#2563EB" />; // blue
      default: return <Entypo name="location-pin" size={20} color="#6B7280" />; // gray
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Text style={styles.headerSubtitle}>Stay updated with bus alerts</Text>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.list}>
        {notifications.map((notif) => (
          <View 
            key={notif.id} 
            style={[
              styles.notification,
              { backgroundColor: notif.unread ? '#DBEAFE' : '#fff' }
            ]}
          >
            <View style={styles.iconContainer}>
              <View style={[styles.iconBg, { backgroundColor: getBgColor(notif.type) }]}>
                {getIcon(notif.type)}
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.title}>{notif.title}</Text>
                {notif.unread && <View style={styles.unreadDot}></View>}
              </View>
              <Text style={styles.message}>{notif.message}</Text>
              <Text style={styles.time}>{notif.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  headerSubtitle: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  list: { flex: 1 },
  notification: { flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  iconContainer: { marginRight: 12 },
  iconBg: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  content: { flex: 1 },
  contentHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4, alignItems: 'center' },
  title: { fontSize: 16, color: '#111827', fontWeight: '500' },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#2563EB' },
  message: { fontSize: 14, color: '#4B5563', marginBottom: 2 },
  time: { fontSize: 12, color: '#9CA3AF' },
});

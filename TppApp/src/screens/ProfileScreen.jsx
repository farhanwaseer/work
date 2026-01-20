import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { Avatar, Card, Button, Badge } from 'react-native-paper';
import { AuthContext } from '../contextApi/AuthContext';

export default function PassengerProfile() {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          onPress: async () => {
            await logoutUser();
          },
          style: 'destructive',
        },
      ]
    );
  };

  const trips = [
    { date: 'Today', route: 'Route A', time: '8:45 AM', status: 'Completed' },
    { date: 'Yesterday', route: 'Route A', time: '8:40 AM', status: 'Completed' },
    { date: 'Nov 2', route: 'Route A', time: '8:45 AM', status: 'Completed' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.profileHeader}>
        <Avatar.Text 
          size={96} 
          label={user?.name?.substring(0, 2).toUpperCase() || "AC"} 
          style={{ backgroundColor: '#2563EB' }} 
        />
        <Text style={styles.name}>{user?.name || 'User'}</Text>
        <Text style={styles.subText}>{user?.email}</Text>
        <Badge style={styles.badge}>
          {user?.role === 'passenger' ? 'Passenger' : user?.role}
        </Badge>
      </View>

      <Card style={styles.card}>
        <Card.Title title="Personal Information" titleStyle={styles.cardTitle} />
        <Card.Content>
          <View style={styles.row}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user?.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{user?.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Role</Text>
            <Text style={styles.value}>{user?.role}</Text>
          </View>
        </Card.Content>
      </Card>

      <Button 
        mode="outlined" 
        textColor="red" 
        style={styles.button} 
        onPress={handleLogout}
      >
        Logout
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileHeader: { alignItems: 'center', paddingVertical: 24, gap: 8 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
  subText: { fontSize: 14, color: '#6B7280' },
  badge: { marginTop: 8, backgroundColor: '#2563EB', color: '#fff', alignSelf: 'center' },
  card: { marginVertical: 8, elevation: 1 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  label: { color: '#6B7280' },
  value: { color: '#111827', fontWeight: '500' },
  button: { marginVertical: 8 },
});
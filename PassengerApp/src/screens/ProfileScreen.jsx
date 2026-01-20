
// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { Avatar, Card, Button, Badge } from 'react-native-paper';

// export default function PassengerProfile({ onLogout }) {
//   const trips = [
//     { date: 'Today', route: 'Route A', time: '8:45 AM', status: 'Completed' },
//     { date: 'Yesterday', route: 'Route A', time: '8:40 AM', status: 'Completed' },
//     { date: 'Nov 2', route: 'Route A', time: '8:45 AM', status: 'Completed' },
//   ];

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
//       {/* Profile Header */}
//       <View style={styles.profileHeader}>
//         <Avatar.Text size={96} label="AC" style={{ backgroundColor: '#2563EB' }} />
//         <Text style={styles.name}>Alice Cooper</Text>
//         <Text style={styles.subText}>Student ID: STU001</Text>
//         <Badge style={styles.badge}>Active Passenger</Badge>
//       </View>

//       {/* Personal Information Card */}
//       <Card style={styles.card}>
//         <Card.Title title="Personal Information" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <View style={styles.row}>
//             <Text style={styles.label}>Email</Text>
//             <Text style={styles.value}>alice.c@college.edu</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Phone</Text>
//             <Text style={styles.value}>+1 234-567-1001</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Department</Text>
//             <Text style={styles.value}>Computer Science</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Year</Text>
//             <Text style={styles.value}>3rd Year</Text>
//           </View>
//         </Card.Content>
//       </Card>

//       {/* My Route Card */}
//       <Card style={styles.card}>
//         <Card.Title title="My Route" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <View style={styles.row}>
//             <Text style={styles.label}>Regular Route</Text>
//             <Text style={styles.value}>Route A</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Boarding Stop</Text>
//             <Text style={styles.value}>Main Campus Gate</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Destination</Text>
//             <Text style={styles.value}>Engineering Block</Text>
//           </View>
//         </Card.Content>
//       </Card>

//       {/* Trip History Card */}
//       <Card style={styles.card}>
//         <Card.Title title="Trip History" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           {trips.map((trip, idx) => (
//             <View key={idx} style={[styles.row, idx !== trips.length - 1 && styles.borderBottom]}>
//               <View>
//                 <Text style={styles.tripDate}>{trip.date}</Text>
//                 <Text style={styles.tripDetail}>{trip.route} • {trip.time}</Text>
//               </View>
//               <Badge>{trip.status}</Badge>
//             </View>
//           ))}
//         </Card.Content>
//       </Card>

//       {/* Buttons */}
//       <Button mode="outlined" style={styles.button}>
//         Edit Profile
//       </Button>
//       <Button mode="outlined" textColor="red" style={styles.button} onPress={onLogout}>
//         Logout
//       </Button>
//         {/* <Button title="Logout" color="red" onPress={onLogout} /> */}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   profileHeader: { alignItems: 'center', paddingVertical: 24, gap: 8 },
//   name: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
//   subText: { fontSize: 14, color: '#6B7280' },
//   badge: { marginTop: 8, backgroundColor: '#2563EB', color: '#fff', alignSelf: 'center' },
//   card: { marginVertical: 8, elevation: 1 },
//   cardTitle: { fontSize: 16, fontWeight: 'bold' },
//   row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
//   borderBottom: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
//   label: { color: '#6B7280' },
//   value: { color: '#111827', fontWeight: '500' },
//   tripDate: { fontSize: 14, color: '#111827' },
//   tripDetail: { fontSize: 12, color: '#6B7280' },
//   button: { marginVertical: 8 },
// });

import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Avatar, Card, Button, Badge } from 'react-native-paper';
import { AuthContext } from '../contextApi/AuthContext';

export default function PassengerProfile() {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
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
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Avatar.Text 
          size={96} 
          label={user?.name?.substring(0, 2).toUpperCase() || "AC"} 
          style={{ backgroundColor: '#2563EB' }} 
        />
        <Text style={styles.name}>{user?.name || 'Alice Cooper'}</Text>
        <Text style={styles.subText}>{user?.email || 'student@college.edu'}</Text>
        <Badge style={styles.badge}>{user?.role === 'passenger' ? 'Active Passenger' : user?.role}</Badge>
      </View>

      {/* Personal Information Card */}
      <Card style={styles.card}>
        <Card.Title title="Personal Information" titleStyle={styles.cardTitle} />
        <Card.Content>
           <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{user?.name || 'Alice Cooper'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user?.email || 'alice.c@college.edu'}</Text>
          </View>
         
          <View style={styles.row}>
            <Text style={styles.label}>Role</Text>
            <Text style={styles.value}>{user?.role || 'Passenger'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>User ID</Text>
            <Text style={styles.value}>{user?._id?.substring(0, 8) || 'STU001'}</Text>
          </View>
        </Card.Content>
      </Card>

      {/* My Route Card */}
      <Card style={styles.card}>
        <Card.Title title="My Route" titleStyle={styles.cardTitle} />
        <Card.Content>
          <View style={styles.row}>
            <Text style={styles.label}>Regular Route</Text>
            <Text style={styles.value}>Route A</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Boarding Stop</Text>
            <Text style={styles.value}>Main Campus Gate</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Destination</Text>
            <Text style={styles.value}>Engineering Block</Text>
          </View>
        </Card.Content>
      </Card>

      {/* Trip History Card */}
      <Card style={styles.card}>
        <Card.Title title="Trip History" titleStyle={styles.cardTitle} />
        <Card.Content>
          {trips.map((trip, idx) => (
            <View key={idx} style={[styles.row, idx !== trips.length - 1 && styles.borderBottom]}>
              <View>
                <Text style={styles.tripDate}>{trip.date}</Text>
                <Text style={styles.tripDetail}>{trip.route} • {trip.time}</Text>
              </View>
              <Badge>{trip.status}</Badge>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Buttons */}
      <Button mode="outlined" style={styles.button}>
        Edit Profile
      </Button>
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
  borderBottom: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  label: { color: '#6B7280' },
  value: { color: '#111827', fontWeight: '500' },
  tripDate: { fontSize: 14, color: '#111827' },
  tripDetail: { fontSize: 12, color: '#6B7280' },
  button: { marginVertical: 8 },
});

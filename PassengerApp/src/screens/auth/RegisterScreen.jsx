// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// export default function RegisterScreen({ onLogin, navigation }) {
//   const [name, setName] = useState('');
//   const [studentId, setStudentId] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create Account</Text>

//       <TextInput placeholder="Full Name" style={styles.input} value={name} onChangeText={setName} />
//       <TextInput placeholder="Student ID" style={styles.input} value={studentId} onChangeText={setStudentId} />
//       <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
//       <TextInput placeholder="Phone" style={styles.input} value={phone} onChangeText={setPhone} />
//       <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

//       <Button title="Register" onPress={onLogin} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, justifyContent: 'center' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 16
//   }
// });


import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ onLogin, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Student ID" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      {/* Mock register: immediately log in */}
      <Button title="Register" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16
  }
});

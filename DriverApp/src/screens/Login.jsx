import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={setUsername}
      />
      {/* <Button
        title="Login"
        onPress={() => navigation.navigate('Home', { name: username })}
      /> */}
      <Button title="Login" onPress={() => setIsLoggedIn(true)} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#999', padding: 10, marginBottom: 15, borderRadius: 5 },
});

export default Login;
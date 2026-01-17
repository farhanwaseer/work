import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function PassengerMessages() {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <Text style={styles.headerSubtitle}>Chat with your driver</Text>
      </View>

      {/* Messages List */}
      <ScrollView style={styles.messagesList} contentContainerStyle={{ paddingVertical: 8 }}>
        {/* Received message */}
        <View style={styles.messageRow}>
          <Avatar.Text size={32} label="JS" style={{ backgroundColor: '#DBEAFE', color: '#2563EB' }} />
          <View style={styles.messageContent}>
            <View style={[styles.messageBubble, styles.receivedBubble]}>
              <Text style={styles.receivedText}>Running 5 minutes behind schedule. Will be there soon!</Text>
            </View>
            <Text style={styles.messageTime}>10:25 AM</Text>
          </View>
        </View>

        {/* Sent message */}
        <View style={[styles.messageRow, { justifyContent: 'flex-end' }]}>
          <View style={styles.messageContent}>
            <View style={[styles.messageBubble, styles.sentBubble]}>
              <Text style={styles.sentText}>Thanks for the update!</Text>
            </View>
            <Text style={[styles.messageTime, { textAlign: 'right' }]}>10:26 AM</Text>
          </View>
        </View>

        {/* Received message */}
        <View style={styles.messageRow}>
          <Avatar.Text size={32} label="JS" style={{ backgroundColor: '#DBEAFE', color: '#2563EB' }} />
          <View style={styles.messageContent}>
            <View style={[styles.messageBubble, styles.receivedBubble]}>
              <Text style={styles.receivedText}>Approaching your stop now</Text>
            </View>
            <Text style={styles.messageTime}>10:30 AM</Text>
          </View>
        </View>
      </ScrollView>

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  headerSubtitle: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  messagesList: { flex: 1, paddingHorizontal: 16 },
  messageRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12, gap: 8 },
  messageContent: { maxWidth: '80%' },
  messageBubble: { padding: 12, borderRadius: 12 },
  receivedBubble: { backgroundColor: '#F3F4F6', borderTopLeftRadius: 0 },
  sentBubble: { backgroundColor: '#2563EB', borderTopRightRadius: 0 },
  receivedText: { fontSize: 14, color: '#111827' },
  sentText: { fontSize: 14, color: '#fff' },
  messageTime: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
  inputContainer: { flexDirection: 'row', padding: 16, borderTopWidth: 1, borderTopColor: '#E5E7EB', alignItems: 'center', gap: 8 },
  input: { flex: 1, padding: 12, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8 },
  sendButton: { backgroundColor: '#2563EB', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8 },
  sendButtonText: { color: '#fff', fontWeight: 'bold' },
});

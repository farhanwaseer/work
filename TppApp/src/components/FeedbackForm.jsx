import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";

const FeedbackForm = ({ navigation }) => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // <— Important for Android
    >
      <ScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ paddingBottom: 40 }} // helps avoid keyboard overlap
      >
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>

        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>

        <TextInput
          style={styles.input}
          value={firstName}
          placeholder="First Name"
          onChangeText={onChangeFirstName}
        />

        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Last Name"
          onChangeText={onChangeLastName}
        />

        <TextInput
          style={styles.messageInput}
          value={message}
          placeholder="Message"
          onChangeText={onChangeMessage}
          multiline={true}
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FeedbackForm;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     fontSize: 16,
//     borderColor: "EDEFEE",
//     backgroundColor: "#F4CE14",
//   },
//   messageInput: {
//     height: 100,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     fontSize: 16,
//     backgroundColor: "#F4CE14",
//   },
//   infoSection: {
//     fontSize: 24,
//     padding: 20,
//     marginVertical: 8,
//     color: "#EDEFEE",
//     textAlign: "center",
//     backgroundColor: "#495E57",
//   },
//   headingSection: {
//     fontSize: 28,
//     padding: 20,
//     marginVertical: 8,
//     color: "#EDEFEE",
//     textAlign: "center",
//     backgroundColor: "#495E57",
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});

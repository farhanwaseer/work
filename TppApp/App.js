import React, { useContext } from "react";
import { StatusBar, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, AuthContext } from "./src/contextApi/AuthContext";
import AuthNavigator from "./src/navigation/AuthNavigator";
import PassengerAppNavigator from "./src/navigation/AppNavigator";
import DriverAppNavigator from "./src/navigation/DriverAppNavigator";

function RootNavigator() {
  const { isLoggedIn, loading, user } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  // Show auth screens if not logged in
  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  // Conditional rendering based on user role
  if (user?.role === "driver") {
    return <DriverAppNavigator />;
  }

  // Default to passenger
  return <PassengerAppNavigator />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#2563eb" barStyle="light-content" />
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
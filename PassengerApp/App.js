// import { View, StyleSheet, StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import RootNavigator from "./src/navigation/RootNavigator";
// import LittleLemonHeader from "./src/components/Header";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar backgroundColor="#2563eb" barStyle="light-content" />

//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// import React, { useState } from 'react';
// import AuthNavigator from './src/navigation/AuthNavigator';
// import AppNavigator from './src/navigation/AppNavigator';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return isLoggedIn ? (
//     <AppNavigator onLogout={() => setIsLoggedIn(false)} />
//   ) : (
//     <AuthNavigator onLogin={() => setIsLoggedIn(true)} />
//   );
// }



// import React, { useState } from "react";
// import {  StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import AuthNavigator from "./src/navigation/AuthNavigator";
// import AppNavigator from "./src/navigation/AppNavigator";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <NavigationContainer>
//             <StatusBar backgroundColor="#2563eb" barStyle="light-content" />
//       {isLoggedIn ? (
//         <AppNavigator onLogout={() => setIsLoggedIn(false)} />
//       ) : (
//         <AuthNavigator onLogin={() => setIsLoggedIn(true)} />
//       )}
//     </NavigationContainer>
//   );
// }


import React, { useContext } from "react";
import { StatusBar, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, AuthContext } from "./src/contextApi/AuthContext";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";

function RootNavigator() {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return isLoggedIn ? (
    <AppNavigator />
  ) : (
    <AuthNavigator />
  );
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
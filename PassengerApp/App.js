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

import React, { useState } from "react";
import {  StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
            <StatusBar backgroundColor="#2563eb" barStyle="light-content" />
      {isLoggedIn ? (
        <AppNavigator onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <AuthNavigator onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}

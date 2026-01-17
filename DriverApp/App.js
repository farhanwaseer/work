// import { View, Text, Button, StyleSheet, FlatList, Image,StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/////
// import LittleLemonHeader from "./src/components/Header";
// import AppNavigator from "./src/navigation/AppNavigator";

// export default function App() {
//   const Tab = createBottomTabNavigator();
//   return (
//     <>
//       <NavigationContainer>
//         <View style={styles.container}>
//           <StatusBar  backgroundColor={"#1a85f0"} barStyle={"light-content"} />
//           <LittleLemonHeader />
//           {/* Tab Navigation */}
//           <AppNavigator />
//         </View>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#333333",
//   },
// });

import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import LittleLemonHeader from "./src/components/Header";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#2563eb" barStyle="light-content" />

      {/* Header only after login */}
      {/* <LittleLemonHeader /> */}

      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

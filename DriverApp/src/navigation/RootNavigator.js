// import React, { useState } from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AppNavigator from "./AppNavigator";
// // import LoginScreen from "../screens/LoginScreen";
// import LoginScreen from "../screens/Login";
// import  DriverLogin from "../screens/DriverLogin"
// import SplashScreen from './../components/SplashScreen';




// const Stack = createNativeStackNavigator();

// export default function RootNavigator() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//              {/* Splash always first */}
//       <Stack.Screen name="Splash" component={SplashScreen} />

//       {!isLoggedIn ? (
//         <Stack.Screen name="Login">
            
//           {(props) => (
//             <DriverLogin {...props} setIsLoggedIn={setIsLoggedIn} />
//           )}
//         </Stack.Screen>
//       ) : (
//         <Stack.Screen name="MainApp" component={AppNavigator} />
//       )}
//     </Stack.Navigator>
//   );
// }


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./AppNavigator";
import DriverLogin from "../screens/DriverLogin";
import SplashScreen from "../components/SplashScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={DriverLogin} />
      <Stack.Screen name="MainApp" component={AppNavigator} />
    </Stack.Navigator>
  );
}

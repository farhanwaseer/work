// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import WelcomeScreen from '../screens/auth/WelcomeScreen';
// import LoginScreen from '../screens/auth/LoginScreen';
// import RegisterScreen from '../screens/auth/RegisterScreen';

// const Stack = createStackNavigator();

// export default function AuthNavigator({ onLogin }) {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       <Stack.Screen name="Login">
//         {() => <LoginScreen onLogin={onLogin} />}
//       </Stack.Screen>
//       <Stack.Screen name="Register">
//         {() => <RegisterScreen onLogin={onLogin} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );
// }

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../components/SplashScreen";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
// import RegisterScreen from "../screens/auth/RegisterScreen";
import RegisterScreen from "../screens/auth/RegisterScreenGPT";

const Stack = createStackNavigator();

export default function AuthNavigator({ onLogin }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      {/* <Stack.Screen name="Login">
        {() => <LoginScreen onLogin={onLogin} />}
      </Stack.Screen> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register">
        {() => <RegisterScreen onLogin={onLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

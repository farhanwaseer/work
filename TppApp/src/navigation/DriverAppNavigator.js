import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AppHeader from "../components/AppHeader";

// Import Driver screens ()

import DriverHome from "../screens/Driver/DriverHome";
import DriverMap from "../screens/Driver/DriverMap";
import DriverMessages from "../screens/Driver/DriverMessages";
import DriverProfile from "../screens/Driver/Profile";

const Tab = createBottomTabNavigator();

export default function DriverAppNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "location" : "location-outline";
            } else if (route.name === "Messages") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2563EB",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 60,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={DriverHome}
          options={{ title: "Home" }}
        />
         <Tab.Screen
          name="Map"
          component={DriverMap}
          options={{ title: "Map" }}
        /> 
        <Tab.Screen
          name="Messages"
          component={DriverMessages}
          options={{ title: "Messages" }}
        />
        <Tab.Screen
          name="Profile"
          component={DriverProfile}
          options={{ title: "Profile" }}
        />
      </Tab.Navigator>
    </View>
  );
}
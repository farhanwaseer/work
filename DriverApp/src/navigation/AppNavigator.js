import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Header
import AppHeader from "../components/Header";

// Screens
import DriverHome from "../screens/DriverHome";
import DriverMap from "../screens/DriverMap";
import DriverMessages from "../screens/DriverMessages";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header – shows only after login */}
      <AppHeader />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Welcome Screen") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "location" : "location-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Messages") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1a81f0",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 60,
          },
        })}
      >
        <Tab.Screen
          name="Welcome Screen"
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
          component={Profile}
          options={{ title: "Profile" }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default AppNavigator;

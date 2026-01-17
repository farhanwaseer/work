import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomTab({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icons = {
          Home: 'home',
          Track: 'navigate',
          Alerts: 'notifications',
          Chat: 'chatbubble',
          Profile: 'person'
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Ionicons
              name={icons[route.name] || 'ellipse'}
              size={22}
              color={isFocused ? '#2563eb' : '#888'}
            />
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  label: { fontSize: 12, color: '#888', marginTop: 2 },
  labelFocused: { color: '#2563eb', fontWeight: '600' },
});

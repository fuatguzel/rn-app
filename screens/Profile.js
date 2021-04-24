import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';

import { darkConflowerBlue } from '../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>
        Welcome to PROFILE!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkConflowerBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

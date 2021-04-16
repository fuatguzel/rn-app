import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { darkConflowerBlue } from '../../constants/Colors';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>
        Welcome to LOGIN!
      </Text>
      <Image
        style={{ width: 60, height: 60, marginTop: 259 }}
        source={require('../../src/assets/google-icon.png')}
      />
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
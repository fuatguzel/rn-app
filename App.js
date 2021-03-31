import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import {darkConflowerBlue} from './src/colors.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }} >Welcome to my App!
      </Text>
      <Image 
        style={{ width: 300, height: 60, marginTop:259 }}
        source={require('./src/assets/signin-button.png')} 
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

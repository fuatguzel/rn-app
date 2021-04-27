import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { darkConflowerBlue } from '../constants/Colors';

export default function InfoDetail() {
  return (
    <ImageBackground
      resizeMode="contain"
      style={{ height: '100%', width: '100%' }}
      source={require('../src/assets/Person-sick-in-your-household-what-to-do.jpg')}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

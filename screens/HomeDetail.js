import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { darkConflowerBlue } from '../constants/Colors';

export default function InfoDetail() {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import AddSymptom from '../components/AddSymptom';

import { darkConflowerBlue } from '../constants/Colors';

export default function SymptomTest() {
  return (
    <View>
      <AddSymptom />
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
